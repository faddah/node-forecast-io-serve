/* @flow */
//
// Called like
// $> node forecast.js 97214
//  - or -
// $> node forecast.js 10011 20050 91308 90069 94101 97215

var async = require('async'),
    getLocation = require('./zip-convert').getLocation,
    showLocation = require('./zip-convert').showLocation,
    getForecast = require('./zip-forecast').getForecast,
    showForecast = require('./zip-forecast').showForecast,
    zipcodes = process.argv.slice(2),
    printError = require('./messages').printError;

var iterator = function (zipcode, next) {
 	// Do something w/the zipcode.
  getLocation(zipcode, function (error, location) {
    showLocation(error, location);
    getForecast(location, function (error, forecast) {
      showForecast(error, forecast);
      next(null, forecast);
    })
  });
 };

var allDone = function (err) {
  printError(err);
  console.log('...and those are your forecasts for today!');
}

 // Loop over each zipcode, one after another.
async.eachSeries(zipcodes, iterator, allDone);