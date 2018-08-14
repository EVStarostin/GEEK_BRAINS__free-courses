/* 
  1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные
  кавычки. Придумать шаблон, который меняет одинарные кавычки на двойные.
  2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную
  кавычку на двойную. 
*/

var quotesRegExp = /'(.+?)'(?!\w)/g;
var quotesBtn = document.querySelector('#qoutesBtn').onclick = function() {
  var qoutesStr = document.querySelector('#qoutesStr').value;
  qoutesStr = qoutesStr.replace(quotesRegExp, '"$1"')
  document.querySelector('#qoutesStr').value = qoutesStr;
}

/* 
  3. Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
  При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
  a. Имя содержит только буквы;
  b. Телефон подчиняется шаблону +7(000)000-0000;
  c. E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
  d. Текст произвольный;
  e. В случае не прохождения валидации одним из полей необходимо выделять это поле
  красной рамкой и сообщать пользователю об ошибке. 
*/

function setFieldValid(field) {
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.remove('text-muted');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.remove('text-danger');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.add('text-success');
}

function setFieldInValid(field) {
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.remove('text-muted');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.remove('text-success');
  document.querySelector('#' + field.getAttribute('aria-describedby')).classList.add('text-danger');
}

function validateForm(e) {
  var NAME_REG_EXP = /^[а-яА-ЯёЁa-zA-Z]+$/,
    PHONE_REG_EXP = /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    EMAIL_REG_EXP = /^\w+(\.|-)?\w+@\w+\.\w+$/;

  var name = this.querySelector('#inputName'),
      phone = this.querySelector('#inputPhone'),
      email = this.querySelector('#inputEmail');

  var fields = [name, phone, email];
      
  var validationErrors = [];
  if (!NAME_REG_EXP.test(name.value)) validationErrors.push(name);
  if (!PHONE_REG_EXP.test(phone.value)) validationErrors.push(phone);
  if (!EMAIL_REG_EXP.test(email.value)) validationErrors.push(email);

  if (validationErrors.length > 0) {
    e.preventDefault();

    fields.forEach(field => {
      if (validationErrors.indexOf(field) === -1) {
        setFieldValid(field);
      } else {
        setFieldInValid(field)
      }
    });
  } else {
    alert("Форма отправлена!")
  }
}

document.querySelector('#feedback').addEventListener('submit', validateForm);