/**
 * Dependencies
 */
var express = require('express');
var join = require('path').join;
var app = express();
var cwd = process.cwd();

// configure the server
app
  .set('views', join(cwd, 'views'))
  .set('view engine', 'jade')
  .use(express.static(join(cwd, 'public')));

/**
 * Spin up Retsly SDK (v2)
 */
var Retsly = require('js-sdk');

/**
 * All the routes
 */
app.get('/', function (req, res) {
  return res.render('index');
});

// example frontend request with retsly-js-sdk (v1)
app.get('/v1-frontend', function (req, res) {
  return res.render('fe', {
    context: 'V1 Frontend Request',
    scripts: ['v1-example-bundle.js']
  });
});

// example backend request with js-sdk (v2)
app.get('/v2-backend', function (req, res) {
  var retsly = Retsly.create(<<<server_token>>>, ['test']);
  retsly
    .listings()
    .getAll(function (err, response) {
      var resp;
      if (err) resp = err.response.text;
      else if (response) resp = JSON.stringify(JSON.parse(response.text), null, 4);

      return res.render('v2-be', {response: resp});
    });
});

// example frontend request with js-sdk (v2)
app.get('/v2-frontend', function (req, res) {
  return res.render('fe', {
    context: 'V2 Frontend Request',
    scripts: ['v2-example-bundle.js']
  });
});

/**
 * Listening closely...
 */
var listeningPort = 3003;
app.listen(listeningPort, function () {
  console.log('Listening on port:', listeningPort);
});
