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
    
function MenuItem(my_href, my_name) {
    Container.call(this);
    this.className = "menu-item";
    this.href = my_href;
    this.name = my_name;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
    return "<li class='"+this.className+"' href='"+ this.href +"'>" + this.name + "</li>";
}

// /* Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными
// пунктами, т.е с подменю. */
// function MenuVer2(my_id, my_class, my_items) {
//     Menu.call(this);
//     this.id = my_id;
//     this.className = my_class;
//     this.items = my_items;
// }
// MenuVer2.prototype = Object.create(Menu.prototype);
// MenuVer2.prototype.constructor = MenuVer2;
// MenuVer2.prototype.render = function() {
//     var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
//     for (var item in this.items) {
//         if (this.items[item] instanceof MenuItem) {
//             result += this.items[item].render();
//         } else if (this.items[item] instanceof Menu) {
//             result += "<li>" + this.items[item].id + this.items[item].render() + "</li>";
//         }
//     }
//     result += "</ul>";
//     return result;
// }    

var m_item1 = new MenuItem("/", "Главная");
var m_item2 = new MenuItem("/catalogue/", "Каталог");
var m_item3 = new MenuItem("/gallery/", "Галерея");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};
var menu = new Menu("sub_menu", "My_class", m_items);

// var m_items2 = {0: m_item1, 1: m_item2, 2: m_item3, 3: menu};
// var menuVer2 = new MenuVer2("better_menu", "My_class2", m_items2);
// var div = document.write(menuVer2.render());

/* var btn = document.createElement('button');
btn.innerHTML = "Удалить";
btn.onclick = function() {
    menuVer2.remove();
}
document.body.appendChild(btn); */

/* 2 урок */
var btn = document.createElement('button');
btn.innerHTML = "Запросить меню";
btn.onclick = function() {
    menuVer2.fetchMenu();
}

document.body.appendChild(btn);