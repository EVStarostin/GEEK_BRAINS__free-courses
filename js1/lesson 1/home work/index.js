// 1. Создайте константу a, хранящую любое число.
const a = 5;
console.log("a = " + a);
// 2. Создайте переменную s, хранящую любую букву.
let s = 'a';
console.log("s = " + s);
// 3. Переприсвойте переменной s значение, состоящей из буквы, лежащей там ранее, и числа из константы a.
s = s + a;
console.log("s = " + s);
// 4. Создайте переменную b, хранящую любое число.
let b = 5;
console.log("b = " + b);
// 5. Тремя разными способами увеличьте значение b на 1.
b = b + 1;
b++;
b += 1;
console.log("b = " + b);
// 6. Создайте массив li, хранящий числа от 1 до 8.
const li = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("li = " + li);
// 7. Удалите из li числа с 4 по 6.
li.splice(3, 3);
console.log("li = " + li);
// 8. Добавьте в li числа 10 и (5 миллиардов).
li.push(10, 5e9);
console.log("li = " + li);
// 9. Создайте объект ob с ключом numbers, хранящим пустую строку
const ob = {
    "numbers": ""
};
console.log("ob = " + JSON.stringify(ob))
// 10. Сохраните в свойство numbers объекта ob числа из li, соединенные точкой с запятой.
ob.numbers = li.join("; ");
console.log("ob.numbers = " + ob.numbers);
// 11. Добавьте свойство newNumbers в объект ob со значением: числа из li, соединенные точкой с запятой, и еще два раза пятое число из li
ob["newNumbers"] = li.concat([li[4], li[4]]).join("; ");
console.log("ob.newNumbers = " + ob.newNumbers);