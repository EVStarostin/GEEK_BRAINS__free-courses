var express = require('express');
var cors = require('cors');
var menu = require('./menu.json');
var pics = require('./pics.json');

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

app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});