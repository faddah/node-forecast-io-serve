/* @flow */
//  Problem:  Need to return weather data from forecast.io, but they only take .

//  Solution:  First, use our own created zip-convert.js to convert zip code to longitude/latitude.

// my forecast.io API KEY - 6b0701ccfa469e7b92cac363130fa2bb
// example forecast.io API URL Call to return JSON with weather —
// https://api.forecast.io/forecast/6b0701ccfa469e7b92cac363130fa2bb/37.8267,-122.423

var http = require("http");
var zipConvert = require("./zip-convert.js");
var messages = require("./messages.js");

var getLocation = zipConvert.getLocation;
var printLocationInfo = messages.printLocationInfo;
var printForecastMessage = messages.printForecastMessage;
var printError = messages.printError;

// var zipLongLat = {};
// zipLongLat = zipConvert.getLocation(process.argv.slice[2], function(error, location) {
//   console.log(location);
  // printLocationInfo(location.postalcode, location.placeName, location.adminName1, location.countryCode, location.lng, location.lat);
// });

// use zip-convert.js module to get location object from geonames.org



getLocation(process.argv.slice(2), function(error, location) {
  if(location){
    try {
      printLocationInfo(location.postalcode, location.placeName, location.adminName1, location.countryCode, location.lng, location.lat);
    } catch(error) {
			// Locaton object null or undefined error
			printError(error);
		}
  } else {
		// Status Code Error
		printError({message: "There was an error getting the location infor from the Geonames.org server. (Status Code Error: \'" + response.statusCode + " - " + http.STATUS_CODES[response.statusCode] + "\')"});
  }
//  printTheLoc(location);
});

// console.dir("The Location Object is:  " + theLoc);


/* * * * * * * * * * * * * * * *
function getForecast(latitude, longitude) {
	//  Connect to the Forecast.io API URL (https://api.forecast.io/forecast/[APIKEY]/[LATITUDE],[LONGITUDE],[TIME])
  var apiKey = '6b0701ccfa469e7b92cac363130fa2bb';
	var request = http.get("https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude, function(response) {
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
					console.dir(forecast);
					// printMessage(username, profile.badges.length, profile.points.JavaScript);
					// printMessage(faddah, profile.badges.length, profile.points.JavaScript);
				} catch(error) {
					// Parse Error
					printError(error);
				}
			} else {
				// Status Code Error
				printError({message: "There was an error getting the profile for the Treehouse user \"" + username + ",\" user name may not exist. (Status Code Error: \'" + response.statusCode + " - " + http.STATUS_CODES[response.statusCode] + "\')"});
			}
		});
		//  console.log(response.statusCode);
	});
	// Connection Error
	request.on("error", printError);
}

module.exports.getForecast = getForecast;

* * * * * * * * * * * * * * * */