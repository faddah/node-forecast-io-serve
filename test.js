var
  zipconvert = require('./zip-convert.js');

var zip = '97214';
var doNextThing = function (error, data) {
  console.log(error);
  console.log('Data is');
  console.log(data);
  
  // NOW we 
}

var foo;
foo = zipconvert.getLocation(zip);
mydata = getWeatherData(foo);
console.log(mydata); // real weather data

zipconvert.getLocation(zip, function (error, latlong) {
  getWeatherData(latlong, function (error, mydata) {
    getMoredata(mydata, function (error, otherData) {})
    console.log(mydata);
  });
});




var worker = function (data, cb) {
  data = data + ' FOOOOO';
  
  var
    error = null,
    output = {
      data: data,
      sandwich: 'ham'
    };

  if (cb && typeof cb === 'function') {
    cb(error, output);
  }
}


worker('Adam says', function (error, output) {
  console.log(output);
});


















