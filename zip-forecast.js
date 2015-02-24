/* @flow */
//  Problem:  Need to return weather data from forecast.io, but they only take .

//  Solution:  First, use our own created zip-convert.js to convert zip code to longitude/latitude.

// my forecast.io API KEY - 6b0701ccfa469e7b92cac363130fa2bb
// example forecast.io API URL Call to return JSON with weather —
// https://api.forecast.io/forecast/6b0701ccfa469e7b92cac363130fa2bb/37.8267,-122.423

// var http = require("http");
var https = require("https")
var async = require("async");
var zipConvert = require("./zip-convert.js");
var messages = require("./messages.js");

// var getLocation = zipConvert.getLocation;
// var printLocationInfo = messages.printLocationInfo;
var printForecastMessage = messages.printForecastMessage;
var printError = messages.printError;

function getForecast(location, ready) {
	//  Connect to the Forecast.io API URL (https://api.forecast.io/forecast/[APIKEY]/[LATITUDE],[LONGITUDE],[TIME])
  var apiKey = '6b0701ccfa469e7b92cac363130fa2bb';
  var latitude = location.lat;
  var longitude = location.lng;
	var request = https.get("https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude, function(response) {
		var finalData = "";
		//  Read the data
		response.on('data', function (dataStream) {
			finalData += dataStream;
		});
		response.on('end', function() {
			if(response.statusCode === 200) {
				try {
					// Parse the data
					var forecast = JSON.parse(finalData);
					// Print the data
					ready(null, forecast);
				} catch(error) {
					// Parse Error
					printError(error);
				}
			} else {
				// Status Code Error
				printError({message: "There was an error getting the profile for the Treehouse user \"" + username + ",\" user name may not exist. (Status Code Error: \'" + response.statusCode + " - " + https.STATUS_CODES[response.statusCode] + "\')"});
			}
		});
		//  console.log(response.statusCode);
	});
	// Connection Error
	request.on("error", printError);
}

var showForecast = function(error, forecast) {
  if(forecast){
    try {
      printForecastMessage(forecast);
      return forecast;
    } catch(error) {
			// Locaton object null or undefined error
			printError(error);
		}
  } else {
		// Status Code Error
		printError({message: "There was an error getting the weather info from the forecast.io server. (Status Code Error: \'" + response.statusCode + " - " + https.STATUS_CODES[response.statusCode] + "\')"});
  }
};

var showForecastObject = function(error, forecast) {
  if(forecast){
    try {
      console.dir(forecast);
      return forecast;
    } catch(error) {
			// Locaton object null or undefined error
			printError(error);
		}
  } else {
		// Status Code Error
		printError({message: "There was an error getting the weather info from the forecast.io server. (Status Code Error: \'" + response.statusCode + " - " + https.STATUS_CODES[response.statusCode] + "\')"});
  }
};

var theLoc = { "lng":-118.299, "lat":33.787};

getForecast(theLoc, showForecastObject);

module.exports.getForecast = getForecast;
module.exports.showForecast = showForecast;
