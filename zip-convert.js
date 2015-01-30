
//  Problem: forecast.io only will take arguments in longitude and latitude, and input from users will be zip/postal codes.

//  Solution:  use node going to geonames.org server api to get back JSON with longitude and latitude for given zip code

// send user input zip code to geonames server via node


var http = require("http");

// Prints out the final message
function printLocationInfo(zipCode, city, state, country, long, lat) {
	var zipMessage = "The city for the zip code" + zipCode + " is : " + city + ", " + state +  ", " + country + ", longitude: " + long + ", latitude: " +  lat  + ".";
	console.log(zipMessage);
}

// Prints out error messages
function printError(error) {
	console.error(error.message);
}

function getLocation(zip) {
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
			if(response.statusCode === 200) {
				try {
    			// console.log(JSON.parse(finalData));
					// Parse the returned finalData object, knowing it's first key is an array
          // (corrected below, per @jerrysv & @justinabrahms of Freenode #pdxnode - thanx guys!)
					var location = JSON.parse(finalData).postalcodes[0];
					// Print and return the longitude/latitude data objects
					// printLocationInfo(zip, location.placeName, location.adminCode1, location.countryCode, location.lng, location.lat);
					var arrLongLat = { "longitude":location.lng, "latitude":location.lat };
					// console.log(zipLongLat);
					return arrLongLat;
				} catch(error) {
					// Parse Error
					printError(error);
				}
			} else {
				// Status Code Error
				printError({message: "There was an error getting the profile for this Forecast.io call for \"" + zip + ",\" this may be a server error or a zip code that may not exist in the U.S.. (Status Code Error: \'" + response.statusCode + " - " + http.STATUS_CODES[response.statusCode] + "\')"});
			}
		});
		//  console.log(response.statusCode);
	});
}

// getLocation(process.argv.slice(2));

// export module for use in zip-forecast.js
module.exports.getLocation = getLocation;

// api url call to geonames for zip code:  http://api.geonames.org/postalCodeLookupJSON?postalcode=97215&country=US&username=faddah

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

