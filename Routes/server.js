// Angular routes are considered cross-origin. cross-origin is only supparted for: http, https, ftp, and a few others
// Our protocol when we load a page is "file:///"
// This requires something with http,https, ftp, etc. at the beginning for the router to function
// Node js is our answer! With the connect module and the serve-static module, we can serve pages up at 
// This involves:
// 1. npm init - this will create a package, json file in your folder. Package.json 
// 1b. No prompts are required. You can just hit enter, otherwise it will fill the file
// 2. npm install connect - this will add the connect module to a node_module folder.
// 3. npm install serve-static - this will add the serve-staticmodule to a node_module
// 4. node server.js - this will tell node you want to run the JS file server.js (THIS FILE!!)

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8000, function(){
	console.log('Listening on Port 8000...');
});