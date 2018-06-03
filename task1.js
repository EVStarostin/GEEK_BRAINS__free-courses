/* Task 1 */
/* 
    Палиндром
    Написать функцию, возвращающую YES, если входная строка является палиндромом и NO в противном случае.
    На вход подается строка ASCII символов длины n. 1 <= n <= 10000

    Пример
    > node task.js 'Was it a car or a cat I saw?'
    > YES
*/
/* Put your code here */

var str = process.argv[2];
var normalStr = str.replace(/\W|\_/g, "").toLocaleLowerCase();
var reverseStr = normalStr.split("").reverse().join("");

if (normalStr === reverseStr) {
    var isPalindrome = 'YES';
} else {
    var isPalindrome = 'NO';
}

process.stdout.write(isPalindrome);
