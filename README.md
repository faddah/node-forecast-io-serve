Node.js Command Line App to get Weather from Forecast.io
=================

Based on the Node.js Command Line App for retrieving account badge and points info from [Treehouse](http://teamtreehouse.com) in JSON format from [@Chalkers](http://twitter.com/chalkers/). Takes ```process.argv.slice[2]``` from command line for zip code for current weather forecast and returns from [API at Forecast.io](https://developer.forecast.io/).

### Version

v0.0.1e

### Current Info/Still Needed

* Separated into 3 main files —
  * forecast.js — main command line app file run from node
  * zip-convert.js — takes u.s. zip from command line argv and converts it to longitude and latitude for [forecast.io](http://forecast.io/) processing.
  * zip-forecast.js — takes converted from zip code longitude/latitude from zip-convert.js and uses forecast.io API and KEY to return weather forecast.
* Updated files loaded up to GitHub.
* zip-convert.js now returning long./lat. and all other location info as a full JSON data object from the zip code to [genonames.org](http://www.geonames.org/) and made a module export for the zip-forecast.js part.
* zip-forecast now working completely — yay! — and is also now a module to get weather from [forecast.io](http://forecast.io) based on location object feed into [genonames.org](http://www.geonames.org/).
* still need: need to put it all together in forecast.js, which shall call the two major modules, zip-convert & zip-forecast.
* Get to more coding!

### Required Software

* Node.JS ≥ v0.10.36
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