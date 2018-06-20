var t1 = parseFloat(process.argv[2]),
    t2 = parseFloat(process.argv[3]);

t1 = !isNaN(t1) ? t1 : 0;
t2 = !isNaN(t2) ? t2 : 0;

var hoursLabels    = ['час', 'часа', 'часов'],
    minutesLabels  = ['минута', 'минуты', 'минут'],
    secondsLabels  = ['секунда', 'секунды', 'секунд'];

function declOfNum(number, titles)  
{  
    var cases = [2, 0, 1, 1, 1, 2];  
    return number + ' ' + titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var t = t1 + t2;
var h = Math.floor(t / 3600);
var m = Math.floor((t - h*3600) / 60);
var s = Math.floor(t - h*3600 - m*60);
/* Task 3 */
/*
    3. Сложение временных промежутков
    Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
    В выводе использовать часы, минуты и секунды (при необходимости).
    На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000

    Пример
    > node task.js 1 1
    > 2 секунды
    > node task.js 3600 3599
    > 1 час 59 минут 59 секунд
*/
/* Put your code here */

var result = '';
if (h !== 0) {
  result += declOfNum(h, hoursLabels);
}
if (m !== 0 && result !== '') {
  result += ' ' + declOfNum(m, minutesLabels);
} else if (m !== 0) {
  result += declOfNum(m, minutesLabels);
}
if (s !== 0 && result !=='') {
  result += ' ' + declOfNum(s, secondsLabels)
} else if (s !== 0) {
  result += declOfNum(s, secondsLabels)
}

process.stdout.write(result);