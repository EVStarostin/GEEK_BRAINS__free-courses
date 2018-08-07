/**
* Класс, объекты которого описывают параметры гамбургера.
*
* @constructor
* @param size Размер
* @param stuffing Начинка
* @throws {HamburgerException} При неправильном использовании
*/
function Hamburger(size, stuffing) { 
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
 }
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {price: 50, energyValue: 20};
Hamburger.SIZE_LARGE = {price: 100, energyValue: 40};
Hamburger.STUFFING_CHEESE = {price: 10, energyValue: 20};
Hamburger.STUFFING_SALAD = {price: 20, energyValue: 5};
Hamburger.STUFFING_POTATO = {price: 15, energyValue: 10};
Hamburger.TOPPING_MAYO = {price: 15, energyValue: 0};
Hamburger.TOPPING_SPICE = {price: 20, energyValue: 5}
/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
*
* @param topping Тип добавки
* @throws {HamburgerException} При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) {
    if (!Array.isArray(topping)) topping = [topping];
    topping.forEach(element => {
        var isAdded = this.toppings.some(function(item) {
            return item === element;
        });
        if (isAdded) {
            this.removeTopping(element)
        }
        this.toppings.push(element);  
    });
}
/**
* Убрать добавку, при условии, что она ранее была
* добавлена.
*
* @param topping Тип добавки
* @throws {HamburgerException} При неправильном использовании
*/
Hamburger.prototype.removeTopping = function (topping) {
    this.toppings = this.toppings.filter(function(item) {
        return topping !== item;
    });
}
/**
* Получить список добавок.
*
* @return {Array} Массив добавленных добавок, содержит константы
* Hamburger.TOPPING_*
*/
Hamburger.prototype.getToppings = function () {
    return this.toppings;
}
/**
* Узнать размер гамбургера
*/
Hamburger.prototype.getSize = function () {
    return this.size;
}
/**
* Узнать начинку гамбургера
*/
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}
/**
* Узнать цену гамбургера
* @return {Number} Цена в тугриках
*/
Hamburger.prototype.calculatePrice = function () {
    var toppingsPrice = this.getToppings().reduce(function(sum, current) {
        return sum + current.price;
    }, 0);
    return this.getSize().price + this.getStuffing().price + toppingsPrice;
}
/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Hamburger.prototype.calculateCalories = function () {
    var toppingsEnergyValue = this.getToppings().reduce(function(sum, current) {
        return sum + current.energyValue;
    }, 0);
    return this.getSize().energyValue + this.getStuffing().energyValue + toppingsEnergyValue;
}
/**
* Представляет информацию об ошибке в ходе работы с гамбургером.
* Подробности хранятся в свойстве message.
* @constructor
*/
// function HamburgerException (...) { ... }

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping([Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE]);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(JSON.stringify(hamburger.getToppings()));
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());