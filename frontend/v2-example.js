/**
 * Dependencies
 */
var Retsly = require('js-sdk');

/**
 * Example request from the frontend using retsly-js-sdk (v1)
 */
module.exports = request();

function request () {
  // replace <<<>>> values with your applications browser_token
  var retsly = Retsly.create(<<<browser_token>>>, ['test']);

  // make a request to retsly
  retsly
    .listings()
    .where('bedrooms', 3)
    .limit(9)
    .getAll(function (err, res) {
      var text = (err) ? err : res.text;
      var response = JSON.stringify(JSON.parse(text), null, 4);

      // Assign response to the DOM
      var el = document.getElementById('response');
      el.innerHTML = response;
    });
};
