Node.js Command Line App to get Weather from Forecast.io
=================

Based on the Node.js Command Line App for retrieving account badge and points info from [Treehouse](http://teamtreehouse.com) in JSON format from [@Chalkers](http://twitter.com/chalkers/). Takes ```process.argv.slice(2)``` from command line for zip code for current weather forecast and returns from [API at Forecast.io](https://developer.forecast.io/).

### Version

v0.1.2

### To run —

You will need [Node.JS ≥ v0.10.36](http://nodejs.org "The Node.JS Main Web Site.") and the [async](https://github.com/caolan/async) module from [npm](http://npmjs.org "The NPM Main Web Site."). Once all that and this repo is loaded, Just type from command line: ```$ node forecast.js [U.S. ZIPCODE(S)]```, as in: ```$ node forecast.js 10010```; or several zip codes, as thus: ```$ node forecast.js 10010 20050 94101 98109 97210```. It all works! Like magic!

### Current Info/Still Needed

* Separated into 4 main files —
  * forecast.js — main command line app file run from node
  * zip-convert.js — takes u.s. zip from command line argv and converts it to longitude and latitude for [forecast.io](http://forecast.io/) processing.
  * zip-forecast.js — takes converted from zip code longitude/latitude from zip-convert.js and uses forecast.io API and KEY to return weather forecast.
  * messages.js — contains the messages used in the other *.js files to printLocationInfo(), printForecastInfo() & printError().
* All is now completely working! Just type from command line: ```$ node forecast.js [U.S. ZIPCODE(S)]```, as in: ```$ node forecast.js 10010```; or several zip codes, as thus: ```$ node forecast.js 10010 20050 94101 98109 97210```. It all works! Like magic!
* New feature — if location has special weather alert, messages.js printForecastMessage() now prints that out.
* Now fully converting Atmospheric Pressure in hPA to more common U.S. Barometric Pressure inHG (inches Mercury) (from the hPA to inHG conversion at the [conversion units site](http://www.convertunits.com/from/hpa/to/inhg).
* Humidity now showing as percentage.
* Unicode string chars now printing out ok in terminal CLI, just need to make sure character encoding in terminal is set always to UTF.
* forecast.js now has optional forEach() code to call other module callback functions *(commented out; it's faster, but does not work as well as async.eachSeries())*.
* Added in a number of appropriate line breaks in console.log() print outs and and corrected error messages for servers so they are now consistent for both forecast.io and geonames.org.
* Start creating a front-end, perhaps in Angular.JS with some Twitter-Bootstrap — get coding!
* Future version ideas — maybe other country postal codes also?

### Required Software

* [Node.JS ≥ v0.10.36](http://nodejs.org "The Node.JS Main Web Site.")
* [async](https://github.com/caolan/async) module from npm
* [Forecast.io API and API KEY](https://developer.forecast.io/)
* [Geonames API Account](http://www.geonames.org/) that is [Enabled for your Log-in User Name](http://www.geonames.org/manageaccount).

### Copyright & Contact

©2015 by Faddah Steve Yuetsu Wolf

* [faddah on Github](https://github.com/faddah)
* [@yuetsu on Twitter](http://twitter.com/yuetsu)

*Special Thanks!*

* *thanx first and foremost to @chalkers of [Team Treehouse](http://teamtreehouse.com/) and his [very good beginner module on node.js there](http://teamtreehouse.com/library/nodejs-basics), from which i got the base code to call to APIs like [Forecast.io](http://forecast.io) and [Geonames.org](http://geonames.org) and get JSON data objects back with which you can work.*
* *the folks in the Freenode IRC #pdxnode chat channel, especially @jerrysv, @justinabrahm & @chrisdickinson, @pdxleif from @pdxnode — for how to properly parse the location JSON data object that had an array in it, chris for showing how to use the node.js 'http'* ```ready``` *keyword to return the location object properly, and @pdxleif for reminding me it's* ```process.argv.slice(2)```*, not* ```process.argv.slice[2]``` *in my code. Thanks guys!*
* *extra special thanks to my node.js mentor, @s5fs (adam), for getting my MIND RIGHT about call backs, and their use in node.js and why they don't do returns like regular JavaScript functions.*