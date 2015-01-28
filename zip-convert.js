
//  Problem: forecast.io only will take arguments in longitude and latitude, and input from users will be zip/postal codes.

//  Solution:  use node going to geonames.org server api to get back JSON with longitude and latitude for given zip code

// send user input zip code to geonames server via node


var http = require("http");

// Prints out error messages
function printError(error) {
	console.error(error.message);
}

function getLongLat(zip) {
	//  Connect to the API URL ("http://api.geonames.org/postalCodeLookupJSON?postalcode=[ZIP]&country=US&username=[USERNAME]")
	var username = "faddah";
	var geonamesAPIURL = "http://api.geonames.org/postalCodeLookupJSON?postalcode=" + zip + "&country=US&username=" + username;
	var request = http.get(geonamesAPIURL, function(response) {
		var body = "";
		//  Read the data
		response.on('data', function (chunk) {
			body += chunk;
		});
		response.on('end', function() {
			if(response.statusCode === 200) {
				try {
    			console.log(JSON.parse(body));
					// console.log(body);
					// console.log(typeof body);
					// Parse the data
					/* var profile = JSON.parse(body);
					// Print the data
					// console.dir(profile);
					printMessage(username, profile.badges.length, profile.points.JavaScript);
					// printMessage(faddah, profile.badges.length, profile.points.JavaScript);  */
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
















// api url call to geonames for zip code:  http://api.geonames.org/postalCodeLookupJSON?postalcode=97215&country=US&username=faddah