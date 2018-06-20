/* Task 2 */
/*
    2. Количество дней до нового года
    Рассчитать количество дней до нового года.
    На вход поадется дата в формате d m y
    1 <= d <= 31
    m in [января февраля марта апреля мая июня июля августа сентября октября ноября декабря]
    1 <= y <= 2999

    Пример
    > node task.js 4 июля 2018
    > 180
*/
/* Put your code here */

var d = parseFloat(process.argv[2]),
    m = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'].indexOf(process.argv[3]),
    y = parseFloat(process.argv[4]);

var inputDate = new Date(y, m, d);
var newYear = new Date(y, 11, 31);

var daysUntilNewYear = (newYear - inputDate)/86400000;
var result = daysUntilNewYear.toString();

process.stdout.write((result));