/**
* Класс, объекты которого описывают параметры гамбургера.
*
* @constructor
* @param size Размер
* @param stuffing Начинка
* @throws {HamburgerException} При неправильном использовании
*/
function Hamburger(size, stuffing) {
    if (
        [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE].indexOf( size ) === -1 ||
        [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO].indexOf( stuffing ) === -1
    ) {
        throw new HamburgerException('Ошибка при вызове конструкторе по причине "Некорректные входные данные"');   
    }

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
    if (!Array.isArray(topping) && [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE].indexOf( topping ) === -1) {
        throw new HamburgerException('Ошибка при выполнении addTopping() по причине "Некорректные входные данные"');
    }
    if (Array.isArray(topping)) {
        if (topping.length === 0) {
            throw new HamburgerException('Ошибка при выполнении addTopping() по причине "Некорректные входные данные"');
        }
        for (var i = 0; i < topping.length; i++) {
            if ([Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE].indexOf( topping[i] ) === -1) {
                throw new HamburgerException('Ошибка при выполнении addTopping() по причине "Некорректные входные данные"');
            }
        }
    };

    if (!Array.isArray(topping)) topping = [topping];
    for (var i = 0; i < topping.length; i++) {
        var isAdded = this.toppings.some(function(item) {
            return item === topping[i];
        });
        if (isAdded) {
            this.removeTopping(topping[i])
        }
        this.toppings.push(topping[i]);
    }
}
/**
* Убрать добавку, при условии, что она ранее была
* добавлена.
*
* @param topping Тип добавки
* @throws {HamburgerException} При неправильном использовании
*/
Hamburger.prototype.removeTopping = function (topping) {
    if ([Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE].indexOf( topping ) === -1) {
        throw new HamburgerException('Ошибка при выполнении removeTopping() по причине "Некорректные входные данные"');
    }

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
function HamburgerException (message) { 
    this.message = message;
    this.name = "Hamburger Exception";
 }

try {
    var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    hamburger.addTopping([Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE]);

    console.log('Price: ', hamburger.calculatePrice() + ' руб.');
    console.log('EnergyValue: ', hamburger.calculateCalories() + ' калорий');
 } catch (e) {
    console.log(e.name + ": " + e.message);
 }