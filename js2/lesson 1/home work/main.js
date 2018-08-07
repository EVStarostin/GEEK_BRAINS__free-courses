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

var m_item1 = new MenuItem("/", "Главная");
var m_item2 = new MenuItem("/catalogue/", "Каталог");
var m_item3 = new MenuItem("/gallery/", "Галерея");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};
    
var menu = new Menu("sub_menu", "My_class", m_items);

/* Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными
пунктами, т.е с подменю. */
function BetterMenu(my_id, my_class, my_items) {
    Menu.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}
BetterMenu.prototype = Object.create(Menu.prototype);
BetterMenu.prototype.constructor = BetterMenu;
BetterMenu.prototype.render = function() {
    var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
    for (var item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        } else if (this.items[item] instanceof Menu) {
            result += "<li>" + this.items[item].id + this.items[item].render() + "</li>";
        }
    }
    result += "</ul>";
    return result;
}    

var m_items2 = {0: m_item1, 1: m_item2, 2: m_item3, 3: menu};
var betterMenu = new BetterMenu("subMenu", "My_class2", m_items2);

// console.log(menu.render());
var div = document.write(betterMenu.render());
