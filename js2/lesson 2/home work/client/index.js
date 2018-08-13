function Container() {
  this.id = "";
  this.className= "";
  this.htmlCode = "";
}
Container.prototype.render = function() {
  return this.htmlCode;
}

function Menu(my_id, my_class, my_items) {
  Container.call(this);
  this.id = my_id;
  this.className = my_class;
  this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
  var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
  for (var item in this.items) {
      if (this.items[item] instanceof MenuItem) {
          result += this.items[item].render();
      }
  }
  result += "</ul>";
  return result;
}    
  
function MenuItem(my_href, my_name, submenu) {
  Container.call(this);
  this.className = "menu-item";
  this.href = my_href;
  this.name = my_name;
  this.submenu = submenu;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
  if (!this.submenu) return "<li class='"+this.className+"' href='"+ this.href +"'>" + this.name + "</li>";
  var m_items = {};
  for (var i = 0; i < this.submenu.length; i++) {
    var m_item = new MenuItem(this.submenu[i].link, this.submenu[i].name, this.submenu[i].submenu);
    m_items[i] = m_item;
  }
  return "<li class='"+this.className+"' href='"+ this.href +"'>" + this.name + new Menu(undefined, "my_submenu_class", m_items).render() + "</li>";
}

/* 
  1. Улучшить меню таким образом, чтобы оно могло иметь многоуровневую структуру.
  2. Создать меню, соответствующее меню интернет-магазина (личный кабинет, каталог,
  промоакции и т.д.). 
*/
var h2 = document.createElement('h1');
h2.innerHTML = "Задание из методички";
document.body.appendChild(h2);

function fetchMenu() {
  fetch('http://localhost:3000/get_menu')
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    return renderMenu(data);
  })
  .catch( alert );
}

function renderMenu(data) {
  var m_items = {};
  for (var i = 0; i < data.length; i++) {
    var m_item = new MenuItem(data[i].link, data[i].name, data[i].submenu);
    m_items[i] = m_item;
  }
  var menu = new Menu("menu", "my_menu_class", m_items);
  document.write(menu.render());
}

var btn = document.createElement('button');
btn.innerHTML = "Меню";
btn.onclick = fetchMenu;
document.body.appendChild(btn);

/* 
  3. Создать функционал фотогалереи: имеется статичный json-набор миниатюр, на основании
  которого строится сетка изображений со ссылками на полноразмерные картинки. 
*/
function fetchPics() {
  fetch('http://localhost:3000/get_pics')
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    return renderGallery(data);
  })
  .catch( alert );
}

function renderGallery(data) {
  var html = '';
  for (var i = 0; i < data.length; i++) {
    html += " <a href='" + data[i].url + "' target='_blank'><img src='" + data[i].url + "' alt='" + data[i].name + "' width='300' title='" + data[i].name + "' width='300'></a>";
  }
  document.write(html);
}

var btn = document.createElement('button');
btn.innerHTML = "Фотогалерея";
btn.onclick = fetchPics;
document.body.appendChild(btn);

/* 
  4. * Создать два статических ответа {result : “success”} и {result: “error”}. В зависимости от каждого
  из них навесить на определенный ajax-запрос обработчик результата. 
*/
function fetchSuccessOrError(error) {
  var url = error ? 'http://localhost:3000/get_error' : 'http://localhost:3000/get_success';
  fetch(url)
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    if (data.result === "success") return handleSuccess(data);
    if (data.result === "error") return handleError(data);
  })
  .catch( alert );
}

function handleSuccess(data) {
  document.write('Запрос выполнился успешно!');
}

function handleError(data) {
  document.write('В запросе возникла ошибка!');
}

var btn = document.createElement('button');
btn.innerHTML = "Получить success";
btn.onclick = function() {
  return fetchSuccessOrError(false);
};
document.body.appendChild(btn);

var btn = document.createElement('button');
btn.innerHTML = "Получить error";
btn.onclick = function() {
  return fetchSuccessOrError(true);
};
document.body.appendChild(btn);

/* Задание из вебинара */
/* Получить список пользователей */
var h2 = document.createElement('h1');
h2.innerHTML = "Задание из вебинара";
document.body.appendChild(h2);

function get_user_list() {
  fetch('http://89.108.65.123/user')
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    return renderUserList(data);
  })
  .catch( alert );
}

function renderUserList(data) {
  var html = '<ul class="user_list">';
  data.forEach(user => {
    html += '<li>' + user.name + ' (email: ' + user.email + ', age: ' + user.age + ')</li>';
  });
  html += '</ul>'
  document.write(html);
}

var btn = document.createElement('button');
btn.innerHTML = "Получить список пользователей";
btn.onclick = get_user_list;
document.body.appendChild(btn);

/* Получить пользователя по ID */
function get_user_by_id(id) {
  fetch('http://89.108.65.123/user/' + id)
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    return renderUser(data);
  })
  .catch( alert );
}

function renderUser(data) {
  if (data.error) {
    document.write(data.error);
    return;
  }
  var html = '<h4>' + data.name + '</h4>' + '<p>email: ' + data.email + '</p><p> age: ' + data.age + '</p>';
  document.write(html);
}

var br = document.createElement('br');
document.body.appendChild(br);
var br = document.createElement('br');
document.body.appendChild(br);

var input = document.createElement('input');
input.id = "user_id";
input.placeholder = "ID";
document.body.appendChild(input);

var btn = document.createElement('button');
btn.innerHTML = "Получить пользователя по ID";
btn.onclick = function() {
  var user_id = document.querySelector('#user_id').value;
  return get_user_by_id(user_id);
}
document.body.appendChild(btn);

/* Создать нового пользователя */
function save_user(user) {
  fetch('http://89.108.65.123/user/', {method: "POST", body: JSON.stringify(user)})
  .then(function(response) {
    return response.text();
   })
  .then(function(data) {
    return renderSaveUser(data);
  })
  .catch( alert );
}

function renderSaveUser(data) {
  var html = '<h4> Количество пользователей: ' + data + '</h4>';
  document.write(html);
}

var br = document.createElement('br');
document.body.appendChild(br);
var br = document.createElement('br');
document.body.appendChild(br);

var input = document.createElement('input');
input.id = "user_name";
input.placeholder = "name";
document.body.appendChild(input);

var input = document.createElement('input');
input.id = "user_email";
input.placeholder = "email";
document.body.appendChild(input);

var input = document.createElement('input');
input.id = "user_age";
input.placeholder = "age";
document.body.appendChild(input);

var btn = document.createElement('button');
btn.innerHTML = "Создать пользователя";
btn.onclick = function() {
  var name = document.querySelector('#user_name').value,
      email = document.querySelector('#user_email').value,
      age = document.querySelector('#user_age').value;
  return save_user({name, email, age});
}
document.body.appendChild(btn);