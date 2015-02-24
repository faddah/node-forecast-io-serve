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

var theLoc = { "lng":-122.727802, "lat":37.784827};

getForecast(theLoc, showForecastObject);

module.exports.getForecast = getForecast;
module.exports.showForecast = showForecast;

/* * * * * * * * * * * * * * * *

Example returned JSON data from forecast.io —

{
  latitude: 40.74,
  longitude: -74,
  timezone: "America/New_York",
  offset: -5,
  currently: 
  {
    time: 1424750583, 
    summary: "Clear",
    icon: "clear-night",
    nearestStormDistance: 1,
    nearestStormBearing: 140,
    precipIntensity: 0,
    precipProbability: 0,
    temperature: 8.76,
    apparentTemperature: -4.26,
    dewPoint: -4.78,
    humidity: 0.53,
    windSpeed: 8.95,
    windBearing: 312,
    visibility: 10,
    cloudCover: 0.01,
    pressure: 1029.68,
    ozone: 414.68
  },
  minutely: 
  {
    summary: "Clear for the hour.",
    icon: "clear-night",
    data: 
    [
      {
        time: 1424750580,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750640,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750700,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750760,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750820,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750880,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424750940,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751000,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751060,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751120,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751180,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751240,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751300,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751360,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751420,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751480,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751540,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751600,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751660,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751720,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751780,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751840,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751900,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424751960,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752020,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752080,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752140,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752200,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752260,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752320,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752380,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752440,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752500,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752560,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752620,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752680,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752740,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752800,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752860,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752920,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424752980,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753040,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753100,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753160,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753220,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753280,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753340,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753400,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753460,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753520,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753580,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753640,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753700,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753760,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753820,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753880,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424753940,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424754000,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424754060,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424754120,
        precipIntensity: 0,
        precipProbability: 0
      },
      {
        time: 1424754180,
        precipIntensity: 0,
        precipProbability: 0
      }
    ]
  },
  hourly: 
  {
    summary: "Light snow (under 1 in.) starting tomorrow evening.",
    icon: "snow",
    data: 
    [
      {
        time: 1424750400,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 8.88,
        apparentTemperature: -4.15,
        dewPoint: -4.88,
        humidity: 0.53,
        windSpeed: 9,
        windBearing: 312,
        visibility: 10,
        cloudCover: 0.01,
        pressure: 1029.68,
        ozone: 414.81
      },
      {
        time: 1424754000,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 6.52,
        apparentTemperature: -6.28,
        dewPoint: -3.23,
        humidity: 0.63,
        windSpeed: 8.11,
        windBearing: 311,
        visibility: 10,
        cloudCover: 0,
        pressure: 1029.75,
        ozone: 412.2
      },
      {
        time: 1424757600,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 5.75,
        apparentTemperature: -6.68,
        dewPoint: -2.96,
        humidity: 0.67,
        windSpeed: 7.53,
        windBearing: 313,
        visibility: 10,
        cloudCover: 0,
        pressure: 1029.75,
        ozone: 409.97
      },
      {
        time: 1424761200,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 4.91,
        apparentTemperature: -7,
        dewPoint: -3.27,
        humidity: 0.68,
        windSpeed: 6.86,
        windBearing: 319,
        visibility: 9.87,
        cloudCover: 0,
        pressure: 1029.33,
        ozone: 408.65
      },
      {
        time: 1424764800,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 4.07,
        apparentTemperature: -6.89,
        dewPoint: -3.66,
        humidity: 0.69,
        windSpeed: 5.88,
        windBearing: 320,
        visibility: 9.71,
        cloudCover: 0,
        pressure: 1028.68,
        ozone: 407.71
      },
      {
        time: 1424768400,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 3.15,
        apparentTemperature: -7.13,
        dewPoint: -3.89,
        humidity: 0.72,
        windSpeed: 5.23,
        windBearing: 320,
        visibility: 9.47,
        cloudCover: 0,
        pressure: 1028.18,
        ozone: 406.84
      },
      {
        time: 1424772000,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 2.46,
        apparentTemperature: -6.85,
        dewPoint: -3.65,
        humidity: 0.75,
        windSpeed: 4.48,
        windBearing: 318,
        visibility: 9.21,
        cloudCover: 0.01,
        pressure: 1027.86,
        ozone: 405.99
      },
      {
        time: 1424775600,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 1.94,
        apparentTemperature: -6.62,
        dewPoint: -3.43,
        humidity: 0.78,
        windSpeed: 3.98,
        windBearing: 307,
        visibility: 9.02,
        cloudCover: 0.03,
        pressure: 1027.77,
        ozone: 405.21
      },
      {
        time: 1424779200,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 2.11,
        apparentTemperature: -5.61,
        dewPoint: -2.77,
        humidity: 0.79,
        windSpeed: 3.54,
        windBearing: 301,
        visibility: 8.45,
        cloudCover: 0.08,
        pressure: 1027.66,
        ozone: 404.41
      },
      {
        time: 1424782800,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 3.97,
        apparentTemperature: -3.09,
        dewPoint: -1.21,
        humidity: 0.78,
        windSpeed: 3.33,
        windBearing: 295,
        visibility: 8.48,
        cloudCover: 0.06,
        pressure: 1027.51,
        ozone: 403.66
      },
      {
        time: 1424786400,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 6.66,
        apparentTemperature: 6.66,
        dewPoint: -0.07,
        humidity: 0.73,
        windSpeed: 2.9,
        windBearing: 299,
        visibility: 9.34,
        cloudCover: 0.04,
        pressure: 1027.31,
        ozone: 402.88
      },
      {
        time: 1424790000,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 8.88,
        apparentTemperature: 8.88,
        dewPoint: 1.29,
        humidity: 0.71,
        windSpeed: 1.39,
        windBearing: 275,
        visibility: 9.59,
        cloudCover: 0.05,
        pressure: 1026.84,
        ozone: 401.75
      },
      {
        time: 1424793600,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 11.2,
        apparentTemperature: 11.2,
        dewPoint: 3.45,
        humidity: 0.7,
        windSpeed: 1.93,
        windBearing: 176,
        visibility: 9.6,
        cloudCover: 0.16,
        pressure: 1025.95,
        ozone: 399.97
      },
      {
        time: 1424797200,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 13.6,
        apparentTemperature: 5.36,
        dewPoint: 6.28,
        humidity: 0.72,
        windSpeed: 5.08,
        windBearing: 157,
        visibility: 9.46,
        cloudCover: 0.25,
        pressure: 1024.79,
        ozone: 397.84
      },
      {
        time: 1424800800,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 15.53,
        apparentTemperature: 5.5,
        dewPoint: 8.4,
        humidity: 0.73,
        windSpeed: 7.16,
        windBearing: 154,
        visibility: 9.4,
        cloudCover: 0.34,
        pressure: 1023.54,
        ozone: 395.94
      },
      {
        time: 1424804400,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 17.05,
        apparentTemperature: 6.72,
        dewPoint: 10.47,
        humidity: 0.75,
        windSpeed: 7.9,
        windBearing: 150,
        visibility: 9.28,
        cloudCover: 0.41,
        pressure: 1022.2,
        ozone: 394.57
      },
      {
        time: 1424808000,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.15,
        apparentTemperature: 7.67,
        dewPoint: 12.02,
        humidity: 0.76,
        windSpeed: 8.42,
        windBearing: 147,
        visibility: 9.28,
        cloudCover: 0.46,
        pressure: 1020.77,
        ozone: 393.43
      },
      {
        time: 1424811600,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.37,
        apparentTemperature: 8.72,
        dewPoint: 12.93,
        humidity: 0.79,
        windSpeed: 7.41,
        windBearing: 147,
        visibility: 9.34,
        cloudCover: 0.52,
        pressure: 1019.42,
        ozone: 392.22
      },
      {
        time: 1424815200,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.38,
        apparentTemperature: 8.67,
        dewPoint: 13.84,
        humidity: 0.82,
        windSpeed: 7.5,
        windBearing: 154,
        visibility: 9.33,
        cloudCover: 0.63,
        pressure: 1018.24,
        ozone: 391.05
      },
      {
        time: 1424818800,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.27,
        apparentTemperature: 9.38,
        dewPoint: 14.69,
        humidity: 0.86,
        windSpeed: 6.52,
        windBearing: 153,
        visibility: 9.21,
        cloudCover: 0.91,
        pressure: 1017.14,
        ozone: 389.8
      },
      {
        time: 1424822400,
        summary: "Overcast",
        icon: "cloudy",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.45,
        apparentTemperature: 9.77,
        dewPoint: 15.64,
        humidity: 0.89,
        windSpeed: 6.34,
        windBearing: 154,
        visibility: 8.9,
        cloudCover: 0.96,
        pressure: 1016.03,
        ozone: 387.87
      },
      {
        time: 1424826000,
        summary: "Light Snow",
        icon: "snow",
        precipIntensity: 0.0026,
        precipProbability: 0.03,
        precipType: "snow",
        precipAccumulation: 0.044,
        temperature: 18.78,
        apparentTemperature: 11.98,
        dewPoint: 16.52,
        humidity: 0.91,
        windSpeed: 4.64,
        windBearing: 183,
        visibility: 8.16,
        cloudCover: 0.98,
        pressure: 1014.87,
        ozone: 384.72
      },
      {
        time: 1424829600,
        summary: "Light Snow",
        icon: "snow",
        precipIntensity: 0.0056,
        precipProbability: 0.13,
        precipType: "snow",
        precipAccumulation: 0.091,
        temperature: 19.18,
        apparentTemperature: 14.11,
        dewPoint: 17.15,
        humidity: 0.92,
        windSpeed: 3.42,
        windBearing: 217,
        visibility: 7.05,
        cloudCover: 1,
        pressure: 1013.72,
        ozone: 380.89
      },
      {
        time: 1424833200,
        summary: "Light Snow",
        icon: "snow",
        precipIntensity: 0.007,
        precipProbability: 0.21,
        precipType: "snow",
        precipAccumulation: 0.111,
        temperature: 19.8,
        apparentTemperature: 14.43,
        dewPoint: 17.97,
        humidity: 0.92,
        windSpeed: 3.69,
        windBearing: 262,
        visibility: 6.37,
        cloudCover: 1,
        pressure: 1012.63,
        ozone: 377.36
      },
      {
        time: 1424836800,
        summary: "Light Snow",
        icon: "snow",
        precipIntensity: 0.0055,
        precipProbability: 0.13,
        precipType: "snow",
        precipAccumulation: 0.085,
        temperature: 20.33,
        apparentTemperature: 14.84,
        dewPoint: 18.69,
        humidity: 0.93,
        windSpeed: 3.82,
        windBearing: 259,
        visibility: 4.62,
        cloudCover: 0.96,
        pressure: 1011.64,
        ozone: 374.51
      },
      {
        time: 1424840400,
        summary: "Light Snow",
        icon: "snow",
        precipIntensity: 0.0025,
        precipProbability: 0.03,
        precipType: "snow",
        precipAccumulation: 0.039,
        temperature: 20.2,
        apparentTemperature: 14.41,
        dewPoint: 18.71,
        humidity: 0.94,
        windSpeed: 4.02,
        windBearing: 251,
        visibility: 4.92,
        cloudCover: 0.89,
        pressure: 1010.71,
        ozone: 371.97
      },
      {
        time: 1424844000,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 19.97,
        apparentTemperature: 13.55,
        dewPoint: 18.59,
        humidity: 0.94,
        windSpeed: 4.49,
        windBearing: 244,
        visibility: 5.79,
        cloudCover: 0.82,
        pressure: 1009.88,
        ozone: 369.64
      },
      {
        time: 1424847600,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 19.49,
        apparentTemperature: 12.24,
        dewPoint: 18.18,
        humidity: 0.95,
        windSpeed: 5.12,
        windBearing: 244,
        visibility: 6.54,
        cloudCover: 0.76,
        pressure: 1009.05,
        ozone: 367.41
      },
      {
        time: 1424851200,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.85,
        apparentTemperature: 10.71,
        dewPoint: 17.57,
        humidity: 0.95,
        windSpeed: 5.87,
        windBearing: 246,
        visibility: 7.33,
        cloudCover: 0.69,
        pressure: 1008.32,
        ozone: 365.39
      },
      {
        time: 1424854800,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 18.38,
        apparentTemperature: 9.41,
        dewPoint: 17,
        humidity: 0.94,
        windSpeed: 6.63,
        windBearing: 247,
        visibility: 8.08,
        cloudCover: 0.6,
        pressure: 1007.93,
        ozone: 363.72
      },
      {
        time: 1424858400,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 17.82,
        apparentTemperature: 8.13,
        dewPoint: 16.28,
        humidity: 0.94,
        windSpeed: 7.31,
        windBearing: 248,
        visibility: 8.87,
        cloudCover: 0.53,
        pressure: 1007.96,
        ozone: 362.53
      },
      {
        time: 1424862000,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 17.2,
        apparentTemperature: 6.82,
        dewPoint: 15.39,
        humidity: 0.92,
        windSpeed: 8,
        windBearing: 250,
        visibility: 9.54,
        cloudCover: 0.45,
        pressure: 1008.26,
        ozone: 361.69
      },
      {
        time: 1424865600,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 17.48,
        apparentTemperature: 6.53,
        dewPoint: 15.07,
        humidity: 0.9,
        windSpeed: 8.83,
        windBearing: 253,
        visibility: 10,
        cloudCover: 0.36,
        pressure: 1008.63,
        ozone: 360.97
      },
      {
        time: 1424869200,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 19.16,
        apparentTemperature: 7.8,
        dewPoint: 15.54,
        humidity: 0.86,
        windSpeed: 10.01,
        windBearing: 260,
        visibility: 10,
        cloudCover: 0.23,
        pressure: 1009.09,
        ozone: 360.5
      },
      {
        time: 1424872800,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 21.99,
        apparentTemperature: 10.47,
        dewPoint: 16.65,
        humidity: 0.8,
        windSpeed: 11.49,
        windBearing: 266,
        visibility: 10,
        cloudCover: 0.09,
        pressure: 1009.59,
        ozone: 360.14
      },
      {
        time: 1424876400,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 24.88,
        apparentTemperature: 13.36,
        dewPoint: 17.81,
        humidity: 0.74,
        windSpeed: 12.96,
        windBearing: 268,
        visibility: 10,
        cloudCover: 0,
        pressure: 1009.96,
        ozone: 359.28
      },
      {
        time: 1424880000,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 26.61,
        apparentTemperature: 15.13,
        dewPoint: 17.92,
        humidity: 0.69,
        windSpeed: 13.94,
        windBearing: 268,
        visibility: 10,
        cloudCover: 0.04,
        pressure: 1010.13,
        ozone: 357.4
      },
      {
        time: 1424883600,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 27.84,
        apparentTemperature: 16.63,
        dewPoint: 17.58,
        humidity: 0.65,
        windSpeed: 14.1,
        windBearing: 269,
        visibility: 10,
        cloudCover: 0.14,
        pressure: 1010.16,
        ozone: 355.03
      },
      {
        time: 1424887200,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 28.89,
        apparentTemperature: 18.06,
        dewPoint: 17.56,
        humidity: 0.62,
        windSpeed: 13.88,
        windBearing: 272,
        visibility: 10,
        cloudCover: 0.21,
        pressure: 1010.3,
        ozone: 353.08
      },
      {
        time: 1424890800,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 29.84,
        apparentTemperature: 19.46,
        dewPoint: 18.26,
        humidity: 0.62,
        windSpeed: 13.41,
        windBearing: 272,
        visibility: 10,
        cloudCover: 0.22,
        pressure: 1010.66,
        ozone: 351.62
      },
      {
        time: 1424894400,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 30.44,
        apparentTemperature: 20.54,
        dewPoint: 19.23,
        humidity: 0.63,
        windSpeed: 12.64,
        windBearing: 271,
        visibility: 10,
        cloudCover: 0.2,
        pressure: 1011.12,
        ozone: 350.58
      },
      {
        time: 1424898000,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 30.24,
        apparentTemperature: 20.76,
        dewPoint: 19.7,
        humidity: 0.64,
        windSpeed: 11.58,
        windBearing: 271,
        visibility: 10,
        cloudCover: 0.19,
        pressure: 1011.74,
        ozone: 350.64
      },
      {
        time: 1424901600,
        summary: "Clear",
        icon: "clear-day",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 28.94,
        apparentTemperature: 19.9,
        dewPoint: 19.44,
        humidity: 0.67,
        windSpeed: 10.08,
        windBearing: 274,
        visibility: 10,
        cloudCover: 0.2,
        pressure: 1012.61,
        ozone: 352.86
      },
      {
        time: 1424905200,
        summary: "Clear",
        icon: "clear-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 26.98,
        apparentTemperature: 18.43,
        dewPoint: 18.74,
        humidity: 0.71,
        windSpeed: 8.47,
        windBearing: 279,
        visibility: 10,
        cloudCover: 0.24,
        pressure: 1013.63,
        ozone: 356.18
      },
      {
        time: 1424908800,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 25.27,
        apparentTemperature: 17.15,
        dewPoint: 17.93,
        humidity: 0.73,
        windSpeed: 7.31,
        windBearing: 286,
        visibility: 10,
        cloudCover: 0.29,
        pressure: 1014.58,
        ozone: 358.06
      },
      {
        time: 1424912400,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 24.21,
        apparentTemperature: 16.38,
        dewPoint: 17.23,
        humidity: 0.74,
        windSpeed: 6.67,
        windBearing: 294,
        visibility: 10,
        cloudCover: 0.34,
        pressure: 1015.42,
        ozone: 357.2
      },
      {
        time: 1424916000,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 23.35,
        apparentTemperature: 15.68,
        dewPoint: 16.46,
        humidity: 0.74,
        windSpeed: 6.28,
        windBearing: 306,
        visibility: 10,
        cloudCover: 0.45,
        pressure: 1016.21,
        ozone: 354.91
      },
      {
        time: 1424919600,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 22.38,
        apparentTemperature: 14.36,
        dewPoint: 15.46,
        humidity: 0.74,
        windSpeed: 6.47,
        windBearing: 316,
        visibility: 10,
        cloudCover: 0.58,
        pressure: 1016.83,
        ozone: 352.62
      },
      {
        time: 1424923200,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 21.21,
        apparentTemperature: 12.07,
        dewPoint: 14.12,
        humidity: 0.74,
        windSpeed: 7.53,
        windBearing: 322,
        visibility: 10,
        cloudCover: 0.72,
        pressure: 1017.21,
        ozone: 351.04
      }
    ]
  },
  daily: 
  {
    summary: "Mixed precipitation tomorrow through Monday, with temperatures rising to 43°F on Monday.",
icon: "snow",
    data: 
    [
      {
        time: 1424667600,
        summary: "Mostly cloudy in the morning.",
        icon: "partly-cloudy-day",
        sunriseTime: 1424691649,
        sunsetTime: 1424731255,
        moonPhase: 0.18,
        precipIntensity: 0,
        precipIntensityMax: 0,
        precipProbability: 0,
        temperatureMin: 8.88,
        temperatureMinTime: 1424750400,
        temperatureMax: 34.04,
        temperatureMaxTime: 1424667600,
        apparentTemperatureMin: -4.15,
        apparentTemperatureMinTime: 1424750400,
        apparentTemperatureMax: 28.84,
        apparentTemperatureMaxTime: 1424667600,
        dewPoint: 7.09,
        humidity: 0.52,
        windSpeed: 8.61,
        windBearing: 309,
        visibility: 9.99,
        cloudCover: 0.36,
        pressure: 1025.57,
        ozone: 387.63
      },
      {
        time: 1424754000,
        summary: "Light snow (under 1 in.) starting in the evening.",
        icon: "snow",
        sunriseTime: 1424777962,
        sunsetTime: 1424817725,
        moonPhase: 0.21,
        precipIntensity: 0.0009,
        precipIntensityMax: 0.007,
        precipIntensityMaxTime: 1424833200,
        precipProbability: 0.21,
        precipType: "snow",
        precipAccumulation: 0.346,
        temperatureMin: 1.94,
        temperatureMinTime: 1424775600,
        temperatureMax: 20.33,
        temperatureMaxTime: 1424836800,
        apparentTemperatureMin: -7.13,
        apparentTemperatureMinTime: 1424768400,
        apparentTemperatureMax: 14.84,
        apparentTemperatureMaxTime: 1424836800,
        dewPoint: 5.88,
        humidity: 0.78,
        windSpeed: 1.41,
        windBearing: 221,
        visibility: 8.88,
        cloudCover: 0.37,
        pressure: 1022.98,
        ozone: 397.06
      },
      {
        time: 1424840400,
        summary: "Mostly cloudy starting in the evening.",
        icon: "partly-cloudy-night",
        sunriseTime: 1424864274,
        sunsetTime: 1424904195,
        moonPhase: 0.25,
        precipIntensity: 0.0001,
        precipIntensityMax: 0.0025,
        precipIntensityMaxTime: 1424840400,
        precipProbability: 0.03,
        precipType: "snow",
        precipAccumulation: 0.046,
        temperatureMin: 17.2,
        temperatureMinTime: 1424862000,
        temperatureMax: 30.44,
        temperatureMaxTime: 1424894400,
        apparentTemperatureMin: 6.53,
        apparentTemperatureMinTime: 1424865600,
        apparentTemperatureMax: 20.54,
        apparentTemperatureMaxTime: 1424894400,
        dewPoint: 17.35,
        humidity: 0.78,
        windSpeed: 8.59,
        windBearing: 270,
        visibility: 9.22,
        cloudCover: 0.39,
        pressure: 1011.25,
        ozone: 358.52
      },
      {
        time: 1424926800,
        summary: "Light snow (under 1 in.) until afternoon.",
        icon: "snow",
        sunriseTime: 1424950585,
        sunsetTime: 1424990664,
        moonPhase: 0.28,
        precipIntensity: 0.0006,
        precipIntensityMax: 0.0033,
        precipIntensityMaxTime: 1424962800,
        precipProbability: 0.09,
        precipType: "snow",
        precipAccumulation: 0.271,
        temperatureMin: 12.68,
        temperatureMinTime: 1424952000,
        temperatureMax: 22.14,
        temperatureMaxTime: 1424984400,
        apparentTemperatureMin: -0.16,
        apparentTemperatureMinTime: 1424952000,
        apparentTemperatureMax: 11.84,
        apparentTemperatureMaxTime: 1424984400,
        dewPoint: 9.72,
        humidity: 0.7,
        windSpeed: 9.49,
        windBearing: 343,
        visibility: 8.86,
        cloudCover: 0.93,
        pressure: 1018.83,
        ozone: 345.22
      },
      {
        time: 1425013200,
        summary: "Mostly cloudy until afternoon.",
        icon: "partly-cloudy-day",
        sunriseTime: 1425036895,
        sunsetTime: 1425077133,
        moonPhase: 0.31,
        precipIntensity: 0,
        precipIntensityMax: 0,
        precipProbability: 0,
        temperatureMin: 12.78,
        temperatureMinTime: 1425038400,
        temperatureMax: 27.49,
        temperatureMaxTime: 1425078000,
        apparentTemperatureMin: -0.52,
        apparentTemperatureMinTime: 1425038400,
        apparentTemperatureMax: 18.59,
        apparentTemperatureMaxTime: 1425078000,
        dewPoint: 13.99,
        humidity: 0.75,
        windSpeed: 10.36,
        windBearing: 350,
        visibility: 9.77,
        cloudCover: 0.51,
        pressure: 1027.3,
        ozone: 356.53
      },
      {
        time: 1425099600,
        summary: "Flurries overnight.",
        icon: "snow",
        sunriseTime: 1425123204,
        sunsetTime: 1425163602,
        moonPhase: 0.35,
        precipIntensity: 0,
        precipIntensityMax: 0,
        precipProbability: 0,
        temperatureMin: 12.68,
        temperatureMinTime: 1425124800,
        temperatureMax: 28.64,
        temperatureMaxTime: 1425160800,
        apparentTemperatureMin: 1.29,
        apparentTemperatureMinTime: 1425124800,
        apparentTemperatureMax: 22.41,
        apparentTemperatureMaxTime: 1425160800,
        dewPoint: 14.44,
        humidity: 0.74,
        windSpeed: 6.87,
        windBearing: 329,
        cloudCover: 0.03,
        pressure: 1040.51,
        ozone: 366.62
      },
      {
        time: 1425186000,
        summary: "Light snow (under 1 in.) until evening.",
        icon: "snow",
        sunriseTime: 1425209513,
        sunsetTime: 1425250070,
        moonPhase: 0.38,
        precipIntensity: 0.0037,
        precipIntensityMax: 0.0059,
        precipIntensityMaxTime: 1425236400,
        precipProbability: 0.21,
        precipType: "snow",
        precipAccumulation: 0.861,
        temperatureMin: 21.25,
        temperatureMinTime: 1425211200,
        temperatureMax: 36.53,
        temperatureMaxTime: 1425268800,
        apparentTemperatureMin: 14.43,
        apparentTemperatureMinTime: 1425207600,
        apparentTemperatureMax: 28.83,
        apparentTemperatureMaxTime: 1425268800,
        dewPoint: 21.38,
        humidity: 0.74,
        windSpeed: 5.93,
        windBearing: 245,
        cloudCover: 0.28,
        pressure: 1038.45,
        ozone: 375.11
      },
      {
        time: 1425272400,
        summary: "Light rain until afternoon.",
        icon: "rain",
        sunriseTime: 1425295820,
        sunsetTime: 1425336538,
        moonPhase: 0.41,
        precipIntensity: 0.0123,
        precipIntensityMax: 0.0477,
        precipIntensityMaxTime: 1425308400,
        precipProbability: 1,
        precipType: "rain",
        temperatureMin: 33.86,
        temperatureMinTime: 1425297600,
        temperatureMax: 43.32,
        temperatureMaxTime: 1425330000,
        apparentTemperatureMin: 23,
        apparentTemperatureMinTime: 1425297600,
        apparentTemperatureMax: 37.06,
        apparentTemperatureMaxTime: 1425330000,
        dewPoint: 34.31,
        humidity: 0.86,
        windSpeed: 10.53,
        windBearing: 258,
        cloudCover: 0.98,
        pressure: 1021.25,
        ozone: 364.21
      }
    ]
  },
  alerts: 
  [
    {
      title: "Special Weather Statement for New York, NY",
      time: 1424746140,
      expires: 1424790000,
      description: "THE COMBINATION OF STRONG WIND AND TEMPERATURES 5 TO 10 DEGREES ABOVE ZERO THIS EVENING WILL RESULT IN WIND CHILL VALUES RANGING FROM ZERO TO 10 BELOW ZERO. AFTER MIDNIGHT THE WIND WILL DIMINISH TO AROUND 5 MPH AS TEMPERATURES CONTINUE FALLING TO 4 TO 8 DEGREES ABOVE ZERO. WIND CHILL VALUES WILL RANGE FROM ZERO TO 5 BELOW ZERO AFTER MIDNIGHT THROUGH TUESDAY MID MORNING. ",
      uri: "http://alerts.weather.gov/cap/wwacapget.php?x=NY125396F1F544.SpecialWeatherStatement.125396F3DDF0NY.OKXSPSOKX.ebfacb53eff0fd3f190a772e0366af82"
    }
  ],
  flags: 
  {
    sources:
    [
      "nwspa",
      "isd",
      "darksky",
      "nearest-precip",
      "fnmoc",
      "rap",
      "nam",
      "cmc",
      "gfs",
      "sref",
      "rtma",
      "madis",
      "lamp"
    ],
    isd-stations: 
    [
      "725033-94728",
      "725060-94728",
      "725060-99999",
      "997271-99999",
      "999999-94706"
    ],
    darksky-stations: 
    [
      "KOKX"
    ],
    madis-stations:
    [
      "AU015",
      "BATN6",
      "C0858",
      "C1099",
      "C9714",
      "D0486",
      "D3216",
      "D6004",
      "E0405",
      "E1020",
      "E1296",
      "E2876",
      "KLGA",
      "KNYC",
      "KTEB",
      "ROBN4"
    ],
    lamp-stations:
    [
      "KBLM",
      "KCDW",
      "KEWR",
      "KFRG",
      "KHPN",
      "KJFK",
      "KLGA",
      "KMMU",
      "KNYC",
      "KSMQ",
      "KTEB"
    ],
    units: "us"
  }
}                   

* * * * * * * * * * * * * * * */