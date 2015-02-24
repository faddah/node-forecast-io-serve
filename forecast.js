/* @flow */
//
// Called like
// $> node forecast.js 97214
//  - or -
// $> node forecast.js 10011 20050 91308 90069 94101 97215

 var async = require('async'),
 	zip-forecast = require("./zip-forecast"),
 	zipcodes = process.argv.slice(2);
var printError = require('./messages').printError;

 // DEBUG! Let's set these by hand.
 zipcodes = ["10011", "20050", "91308", "90069", "94101", "97215"];

var iterator = function (zipcode, next) {
 	// Do something w/the zipcode.
  getLatLong(zipcode, function (error, latlong) {
    getForecast(latlong, function (error, forecastData) {
      console.log('Forecast is: ' + forecastData);
      next(null, forecastData);
    })
  });
 };

var allDone = function (err) {
  printError(err);
  console.log('...and that is your forecast for today!');
}

 // Loop over each zipcode, one after another.
async.eachSeries(zipcodes, iterator, allDone);

//  formerly from @s5fs over in zip-forecast.js, more applicable here —

// use zip-convert.js module to get location object from geonames.org
// var zipcode = process.argv.slice(2);

// getLocation(zipcode, showLocation);