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
str = str.replace(/\s|\?/g, "").toLocaleLowerCase();
var isPalindrome = 'YES';

for (var index = 0; index < str.length; index++) {
    var element = str[index];
    if (element !== str[str.length - index - 1]) {
        isPalindrome = 'NO';
    }
}

process.stdout.write(isPalindrome);
