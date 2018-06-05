var d = parseFloat(process.argv[2]),
    m = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'].indexOf(process.argv[3]),
    y = parseFloat(process.argv[4]);

var inputDate = new Date(y, m, d);
var newYear = new Date(inputDate.getFullYear()+1, 0, 1);

var daysUntilNewYear = (newYear - inputDate)/86400000 - 1;
var result = daysUntilNewYear.toString();

process.stdout.write((result));