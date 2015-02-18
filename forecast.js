var async = require('async'),
	zip-forecast = require("./zip-forecast.js"),
	zipcodes = process.argv.slice(2);

// DEBUG! Let's set these by hand.
zipcodes = ["10011", "20050", "91308", "90069", "94101", "97215"];

// Loop over each zipcode, one after another.
async.eachSeries(zipcodes, function (zipcode, next) {
	// Do something w/the zipcode.
	zip-forecast.getForecast(zipcode);
	next(null);
});


