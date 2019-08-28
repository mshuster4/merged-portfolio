require("dotenv").config();

var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3001;
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pug = require('pug')
var serveStatic = require('serve-static')

var routes = require('./routes');

var PORT = process.env.PORT || 3001;

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html')).then
  res.send("Nodemailer initalized")
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));