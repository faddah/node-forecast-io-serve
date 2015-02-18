/* @flow */
//  Problem: forecast.io only will take arguments in longitude and latitude, and input from users will be zip/postal codes.

//  Solution:  use node going to geonames.org server api to get back JSON with longitude and latitude for given zip code

// send user input u.s. zip code to geonames server via node

var http = require("http");
var messages = require("./messages.js");

var printError = messages.printError;
// var printLocationInfo = messages.printLocationInfo;

function getLocation(zip, ready) {
	//  Connect to the API URL ("http://api.geonames.org/postalCodeLookupJSON?postalcode=[ZIP]&country=US&username=[USERNAME]")
	var username = "faddah";
	var geonamesAPIURL = "http://api.geonames.org/postalCodeLookupJSON?postalcode=" + zip + "&country=US&username=" + username;
	var request = http.get(geonamesAPIURL, function(response) {
		var finalData = "";
		//  Read the data
		response.on('data', function (dataStream) {
			finalData += dataStream;
		});
		response.on('end', function() {
		  // if we have a functional server connection...
			if(response.statusCode === 200 && finalData) {
				try {
    			// Parse the returned finalData object, knowing it's first key is an array
          // (corrected below, per @jerrysv & @justinabrahms of Freenode #pdxnode - thanx guys!)
					var location = JSON.parse(finalData).postalcodes[0];
					// Per @chrisdickinson (thanks, chris!), use 'ready' to return the location data object, including longitude (location.lng) and latitude (location.lat).
					ready(null, location);
				} catch(error) {
					// Parse Error
          printError(error);
				}
			} else {
				// Status Code Error
        printError({message: "There was an error getting the locaton for this zip code to the geonames.org call for \"" + zip + ",\" this may be a server error or a zip code that may not exist in the U.S.. (Status Code Error: \'" + response.statusCode + " - " + http.STATUS_CODES[response.statusCode] + "\')"});
			}
		});
	});
}

// export module for use in zip-forecast.js
module.exports.getLocation = getLocation;

// example api url call to geonames for zip code:  http://api.geonames.org/postalCodeLookupJSON?postalcode=97215&country=US&username=faddah

/* * * * * * * * * * * * * * * *

Example returned JSON data from geonames.com —

{ postalcodes:
   [ { adminName2: 'Multnomah',
       adminCode2: '051',
       postalcode: '97215',
       adminCode1: 'OR',
       countryCode: 'US',
       lng: -122.599001,
       placeName: 'Portland',
       lat: 45.514282,
       adminName1: 'Oregon' } ] }

* * * * * * * * * * * * * * * */
