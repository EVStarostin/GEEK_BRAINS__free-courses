var quotesRegExp = /'(.+?)'(?=\W)/g;
var quotesBtn = document.querySelector('#qoutesBtn').onclick = function() {
    var qoutesStr = document.querySelector('#qoutesStr').value;
    qoutesStr = qoutesStr.replace(quotesRegExp, '"$1"')
    document.querySelector('#qoutesStr').value = qoutesStr;
}

var phoneRegExp = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
var phoneStr = "+7(927)099-6701";

var emailRegExp = /^\w+(\.|-)?\w+@\w+.\w+$/;
var emailStr = ["mymail@mail.ru", "my.mail@mail.ru", "my-mail@mail.ru"];

var textRegExp = /^.*$/;
var textStr = "Произвольный текст";