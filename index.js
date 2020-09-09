var express = require('express');
var app = express();
var os = require("os");
var hostname = os.hostname();

app.get('/', function (req, res) {
   res.send('Server Name'+hostname);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})