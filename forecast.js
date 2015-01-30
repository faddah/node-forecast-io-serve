// var element = document.querySelector("#greeting");
// element.innerText = "Hello, world!";


var profile = require("./zip-forecast.js");
// console.dir(process.argv);
var zips = process.argv.slice(2);

// var postalCodes = ["10011", "20050", 91308", "90069", "94101", "97215"];

zips.forEach(zip-forecast.getForecast);

// var username = "chalkers";
// var faddah = "faddah";

