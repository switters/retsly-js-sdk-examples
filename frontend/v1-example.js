/**
 * Dependencies
 */
var Retsly = require('retsly-js-sdk');

/**
 * Example request from the frontend using retsly-js-sdk (v1)
 */
module.exports = request();

function request () {
  // replace <<<>>> values with your applications client_id and browser_token
  var retsly = new Retsly.create(<<<client_id>>>, <<<browser_token>>>);

  // make a request to retsly
  retsly.get('/api/v1/test/listings', {bedrooms: 3, limit: 9}, function(res) {
    var response = JSON.stringify(res, null, 4);

    // Assign response to the DOM
    var el = document.getElementById('response');
    el.innerHTML = response;
  });
});
