function Container() {
  this.id = "";
  this.className= "";
  this.htmlCode = "";
}
Container.prototype.render = function() {
  return this.htmlCode;
}

/* Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет
контейнер */
Container.prototype.remove = function() {
  if (document.getElementById(this.id) !== null) document.getElementById(this.id).remove();
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

/* 2 урок */
// Многоуровневое меню, загружаемое из json объекта, полученного с сервера
function fetchMenu() {
  fetch('http://localhost:3000/get_menu')
  .then(function(response) {
    return response.json();
   })
  .then(function(inputData) {
    return renderMenu(inputData);
  })
  .catch( alert );
}

function renderMenu(inputData) {
  var m_items = {};
  for (var i = 0; i < inputData.length; i++) {
    var m_item = new MenuItem(inputData[i].link, inputData[i].name, inputData[i].submenu);
    m_items[i] = m_item;
  }
  var menu = new Menu("menu", "my_menu_class", m_items);
  document.write(menu.render());
}

var btn = document.createElement('button');
btn.innerHTML = "Получить меню";
btn.onclick = fetchMenu;
document.body.appendChild(btn);

// Фотогалерея
function fetchPics() {
  fetch('http://localhost:3000/get_menu')
  .then(function(response) {
    return response.json();
   })
  .then(function(inputData) {
    return renderMenu(inputData);
  })
  .catch( alert );
}