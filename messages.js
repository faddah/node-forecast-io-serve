// Prints out the location message
function printLocationInfo(zipCode, city, state, country, long, lat) {
	var zipMessage = "The city for the zip code " + zipCode + " is : " + city + ", " + state +  ", " + country + ", longitude: " + long + ", latitude: " +  lat  + ".";
	console.log(zipMessage);
}

// Prints out the final weather forecast message
function printForecastMessage(city, forecast) {
	var forecastMsg = "The current weather forecast for " + city + " is: " + forecast + ".";
	console.log(forecastMsg);
}

// Prints out error messages
function printError(error) {
	console.error(error.message);
}

module.exports.printLocationInfo = printLocationInfo;
module.exports.printForecastMessage = printForecastMessage;
module.exports.printError = printError;