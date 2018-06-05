var d = parseFloat(process.argv[2]),
    m = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'].indexOf(process.argv[3]),
    y = parseFloat(process.argv[4]);

var inputDate = new Date(y, m, d);
var newYear = new Date(y, 11, 31);

var daysUntilNewYear = (newYear - inputDate)/86400000;
var result = daysUntilNewYear.toString();

process.stdout.write((result));