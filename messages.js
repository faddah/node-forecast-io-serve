/* @flow */
// Prints out the location message
function printLocationInfo(zipCode, city, state, country, long, lat) {
	var zipMessage = "The city for the zip code " + zipCode + " is : " + city + ", " + state +  ", " + country + ", longitude: " + long + ", latitude: " +  lat  + ".";
	console.log(zipMessage);
}

var windDirection = function(bearing) {
  if (bearing >= 345.1 && bearing <= 15.0){
    return "N";
  } else if(bearing >= 15.1 && bearing <= 75.0) {
    return "NW";
  } else if(bearing >= 75.1  && bearing <= 105.0) {
    return "W";
  } else if(bearing >= 105.1 && bearing <= 165.0) {
    return "SW";
  } else if(bearing >= 165.1 && bearing <= 195.0) {
    return "S"
  } else if(bearing >= 195.1 && bearing <= 255.0) {
    return "SE";
  } else if(bearing >= 255.1 && bearing <= 285.0) {
    return "E";
  } else {
    return "NE";
  }
}

// Prints out the final weather forecast message
function printForecastMessage(forecast) {
  var fCurr = forecast.currently;
  var forecastMsg = "The current weather forecast : " + fCurr.summary + " " + fCurr.icon + ", temperature: " + fCurr.temperature + ", wind speed: " + fCurr.windSpeed + "MPH out of the " + windDirection(fCurr.windBearing) + ", precipitation of: " + fCurr.precipIntensity + ", humidity of: " + fCurr.humidity + ", a barometric pressure of: " + fCurr.pressure + ", and a visibility of: " + (100 - fCurr.visibility) + "%.\n";
  console.log(forecastMsg);
}

// Prints out error messages
function printError(error) {
  if (error) {
	  console.error(error.message);
  }
}

module.exports.printLocationInfo = printLocationInfo;
module.exports.printForecastMessage = printForecastMessage;
module.exports.printError = printError;