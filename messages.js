/* @flow */
// Prints out the location message
function printLocationInfo(zipCode, city, state, country, long, lat) {
	var zipMessage = "The city for the zip code " + zipCode + " is: " + city + ", " + state +  ", " + country + ", longitude: " + long + ", latitude: " +  lat  + ".";
	console.log(zipMessage);
}

// used in printForecastMessage() to assign compass degree number to general compass heading
var windDirection = function(bearing) {
  if (bearing >= 357.0 && bearing <= 3.0){
    return "N";
  } else if(bearing >= 3.01 && bearing <= 38.50) {
    return "NNW";
  } else if(bearing >= 38.51 && bearing <= 51.50) {
    return "NW"
  } else if(bearing >= 51.51 && bearing <= 87.0) {
    return "WNW";
  } else if(bearing >= 87.01  && bearing <= 93.0) {
    return "W";
  } else if(bearing >= 93.01 && bearing <= 128.50) {
    return "WSW";
  } else if(bearing >= 128.51 && bearing <= 141.50) {
    return "SW";
  } else if(bearing >= 141.51 && bearing <= 177.0) {
    return "SSW";
  } else if(bearing >= 177.01 && bearing <= 183.0) {
    return "S"
  } else if(bearing >= 183.01 && bearing <= 218.50) {
    return "SSE";
  } else if(bearing >= 218.51 && bearing <= 231.50) {
    return "SE";
  } else if(bearing >= 231.51 && bearing <= 267.0) {
    return "ESE";
  } else if(bearing >= 267.0 && bearing <= 273.0) {
    return "E";
  } else if(bearing >= 273.01 && bearing <= 308.50) {
    return "ENE";
  } else if(bearing >= 308.51 && bearing <= 321.50) {
    return "NE";
  } else {
    return "NNE";
  }
}

// used with printForecastMessage to convert hPA Atmospheric Pressure units to more common, U.S. Barometric Pressure inHG (inches Mercury).
var hPAtoinHGConversion = function(hPaUnits){
  return (hPaUnits / 33.8638866667);
}

var changeToPercent = function(float) {
  return float * 100;
}

// Prints out the final weather forecast message
function printForecastMessage(forecast, location) {
  var fCurr = forecast.currently;
  var emDash = '\u2014';
  var degF = '\u2109';
  var percent = '\uFF05';
  var forecastMsg = "The current weather forecast for " + location.placeName + ", " + location.adminName1 + ", " + location.countryCode + ", is: " + fCurr.summary + " " + fCurr.icon + ", temperature: " + fCurr.temperature + degF + ", feels like: " + fCurr.apparentTemperature + degF + ", wind speed: " + fCurr.windSpeed + "MPH out of the " + windDirection(fCurr.windBearing) + ", precipitation of: " + fCurr.precipIntensity + ", humidity of: " + changeToPercent(fCurr.humidity) + percent + ", a barometric pressure of: " + hPAtoinHGConversion(fCurr.pressure).toFixed(2) + " inHG (inches Mercury), and a visibility of: " + fCurr.visibility + ".";
  console.log(forecastMsg);
  if(forecast.alerts) {
    var fAlert = forecast.alerts[0];
    alertMsg = "There is also a Special Weather Alert Message for this region " + emDash + "\n" + fAlert.title + ": \n\n" + fAlert.description + "\nMore information can be found at this web address: " + fAlert.uri + ".\n";
    console.log(alertMsg);
  }
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