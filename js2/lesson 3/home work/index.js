var quotesRegExp = /'(.+?)'(?!\w)/g;
var quotesBtn = document.querySelector('#qoutesBtn').onclick = function() {
  var qoutesStr = document.querySelector('#qoutesStr').value;
  qoutesStr = qoutesStr.replace(quotesRegExp, '"$1"')
  document.querySelector('#qoutesStr').value = qoutesStr;
}

document.querySelector('#feedback').addEventListener('submit', validateForm);
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

  if (validationErrors.length > 0) e.preventDefault();
  fields.forEach(element => {
    if (validationErrors.indexOf(element) === -1) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.remove('text-muted');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.remove('text-danger');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.add('text-success');
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.remove('text-muted');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.remove('text-success');
      document.querySelector('#'+element.getAttribute('aria-describedby')).classList.add('text-danger');
    }
  });

  // validationErrors.forEach(element => {
  //   element.classList.add('is-invalid');
  //   document.querySelector('#'+element.getAttribute('aria-describedby')).classList.remove('text-muted');
  //   document.querySelector('#'+element.getAttribute('aria-describedby')).classList.add('text-danger');
  // });
}