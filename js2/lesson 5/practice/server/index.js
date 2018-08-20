const express = require('express');
const bp = require("body-parser");
const cors = require('cors');
const basket = require('./json/basket_get.json');

const app = express();
app.use(cors());
app.use(bp.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Получить список товаров в корзине */
app.post('/basket/get', function (req, res) {
  res.send(basket);
});

/* Добавить товар в корзину */
app.post('/basket/add', function (req, res) {
  basket.basket.push(req.body);
  basket.amount += req.body.price * req.body.quantity;
  basket.result++;
  res.send({result: 1, full_price: basket.amount});
});

/* Удалить товар из корзины */
app.post('/basket/remove', function (req, res) {
  basket.basket.forEach( (item, i, arr) => {
    if (item.id_product === req.body.id_product) {
      basket.amount -= item.price * item.quantity;
      basket.result--;
      arr.splice(i, 1);
    }
  } );
  res.send({result: 1});
});

app.listen(3000, function () {
  console.log('Server is running on port 3000!');
});