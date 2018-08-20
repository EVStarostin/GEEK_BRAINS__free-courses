const BASE_URL = 'http://localhost:3000';
const AJAX_SETTINGS = {
  "url": "http://localhost:3000",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "data": {}
}

/* Отображение корзины */
function get_basket() {
  const settings = Object.assign({}, AJAX_SETTINGS);
  settings.url = `${AJAX_SETTINGS.url}/basket/get`;
  settings.data = JSON.stringify({
    id_user : 123,
  });

  $.ajax(settings).done( response => {
    const my_ol = $('<ol/>');

    response.basket.forEach(el => {
      const my_li = $(`<li><b>ID#${el.id_product}</b> (${el.quantity} шт. &times; ${el.price} руб.) = <b>${el.quantity * el.price} руб.</b></li>`);
      const my_a = $(`<a href="#">&times;</a>`);
      
      my_a.on('click', e => {
        e.preventDefault();
        remove_basket_item(el.id_product, response.amount);
      })

      my_li.append(my_a).appendTo(my_ol);
    });
    $('#basket').empty().append( $('<h3 class="text-center">Корзина</h3>') ).append(my_ol).append( $('<hr>') );
    $('#basket').append( $(`<h5 class="text-right">${response.result} товаров, ${response.amount} руб.</h5>`) )
  });
}
get_basket();

/* Добавление в корзину */
$('form').on('submit', e => {
  e.preventDefault();
  const settings = Object.assign({}, AJAX_SETTINGS);
  settings.url = `${AJAX_SETTINGS.url}/basket/add`;
  settings.data = JSON.stringify({
    id_product: parseInt($('#id_product').val()), 
    quantity: parseInt($('#quantity').val()), 
    price: parseFloat($('#price').val())
  });
  $.ajax(settings).done( response => {
    if (response.result === 1) {
      get_basket();
      $('form').trigger("reset");
    }
  });
});

/* Удаление из корзины */
function remove_basket_item(id, amount) {
  const settings = Object.assign({}, AJAX_SETTINGS);
  settings.url = `${AJAX_SETTINGS.url}/basket/remove`;
  settings.data = JSON.stringify({
    id_product: id,
    full_price: amount
  });

  $.ajax(settings).done( response => {
    if (response.result === 1) get_basket();
  });
}

