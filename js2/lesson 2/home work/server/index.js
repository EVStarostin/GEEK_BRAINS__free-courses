var express = require('express');
var cors = require('cors');
var menu = require('./json/menu.json');
var pics = require('./json/pics.json');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/get_menu', function (req, res) {
  res.send(menu);
});

app.get('/get_pics', function (req, res) {
  res.send(pics);
});

app.get('/get_success', function (req, res) {
  res.send({result: "success"});
});

app.get('/get_error', function (req, res) {
  res.send({result: "error"});
});

app.listen(3000, function () {
  console.log('Server is running on port 3000!');
});