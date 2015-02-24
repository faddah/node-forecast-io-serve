Node.js Command Line App to get Weather from Forecast.io
=================

Based on the Node.js Command Line App for retrieving account badge and points info from [Treehouse](http://teamtreehouse.com) in JSON format from [@Chalkers](http://twitter.com/chalkers/). Takes ```process.argv.slice[2]``` from command line for zip code for current weather forecast and returns from [API at Forecast.io](https://developer.forecast.io/).

### Version

v0.1b

### Current Info/Still Needed

* Separated into 3 main files —
  * forecast.js — main command line app file run from node
  * zip-convert.js — takes u.s. zip from command line argv and converts it to longitude and latitude for [forecast.io](http://forecast.io/) processing.
  * zip-forecast.js — takes converted from zip code longitude/latitude from zip-convert.js and uses forecast.io API and KEY to return weather forecast.
* Updated files loaded up to GitHub.
* zip-convert.js now correctly returning long./lat. data as a 2 member array from the zip code to [genonames.org](http://www.geonames.org/) and made a module export for the zip-forecast.js part.
* Get to more coding!

### Required Software

* Node.JS ≥ v0.10.36
* [Forecast.io API and API KEY](https://developer.forecast.io/)
* [Geonames API Account](http://www.geonames.org/) that is [Enabled for your Log-in User Name](http://www.geonames.org/manageaccount).

### Copyright & Contact

©2015 by Faddah Steve Yuetsu Wolf

* [faddah on Github](https://github.com/faddah)
* [@yuetsu on Twitter](http://twitter.com/yuetsu)
