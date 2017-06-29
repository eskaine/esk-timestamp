// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var url = require('url');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// import timestamp module
const timestamp = require('./js/timestamp.js');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get(/^(.+)$/, function(request, response) {
  
    var reqstr = request.params[0].slice(1, request.params.length);

    //parse request with timestamp module
    var ts = new timestamp();
    var time = ts.getTimestamp(reqstr);
  
    response.send(JSON.stringify(time));

})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
