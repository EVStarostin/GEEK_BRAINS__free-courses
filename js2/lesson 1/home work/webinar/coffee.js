// ДЗ
// добавить зерна
// проверку на пустую кофеварку
// реализовать метод стоп для кофеварки

function CoffeeMachine(power) {
  var waterAmount = 0;
  var coffeeBeans = 0;
  var maxTemp = 90;
  var waterHeatCapacity = 4200; //удельная теплоемкость воды, дж.
  var timerId = null; // Для того, чтобы можно было прервать выполнение

  this.addWater = function (newAmount) {
    if (newAmount >= 50) {
      waterAmount = newAmount
    } else {
      console.error('Слишком мало воды!');
    }
  };

  // добавить зерна
  this.addCoffeeBeans = function (newAmount) {
    if (newAmount >= 10) {
      coffeeBeans = newAmount
    } else {
      console.error('Слишком мало кофейных зерен!');
    }
  };

  var calcBoilTime = function () {
    return (waterAmount * waterHeatCapacity * maxTemp) / power;
  }

  this.getBoilTime = function () {
    return calcBoilTime();
  }

  this.launch = function () {
    var errors = [];
    // проверка на пустую кофеварку и на то, что кофе уже готовится
    if (coffeeBeans === 0) errors.push('Добавьте кофейных зерен!');
    if (waterAmount === 0) errors.push('Добавьте воды!');
    if (timerId !== null) errors.push('Дождитесь окончания приготовления!');
    if (errors.length > 0) {
      console.error(errors.join('; \n'));
      return;
    }
    console.log('Кофе готовится ...');
    console.log('Расчетное время приготовления: ' + calcBoilTime() + ' мс');
    timerId = setTimeout(function () {
      console.log('Кофе готов!');
      timerId = null;
    }, calcBoilTime());
  }

  this.stop = function () {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    } else {
      console.error('Кофеварка не запущена!');
      return;
    }
    console.log('Приготовление кофе остановлено!');
  }
}

var vitek = new CoffeeMachine(3500);
vitek.addWater(50);
vitek.addCoffeeBeans(10);
// vitek.launch();
// console.log(vitek.getBoilTime());

var btnStart = document.createElement('button');
btnStart.innerHTML = "Старт";
btnStart.onclick = vitek.launch;
document.body.appendChild(btnStart);

var btnStop = document.createElement('button');
btnStop.innerHTML = "Стоп";
btnStop.onclick = vitek.stop;
document.body.appendChild(btnStop);