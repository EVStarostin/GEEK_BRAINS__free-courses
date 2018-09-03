/* 
1. Написать функцию loop, которая будет принимать параметры: times (значение по 
  умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), 
  вызывать функцию callback. Если функцию не передана, то цикл не должен 
  отрабатывать ни разу. Покажите применение этой функции 
 */
function loop(times = 0, callback = null) {
  if (callback && typeof callback === 'function') {
    for (let i = 0; i < times; i++) {
      callback();
    }
  } else {
    return false;
  }
}

loop(5, () => console.log('Hello world!'));
loop(10);

/* 
2. Написать функцию calculateArea, которая будет принимать параметры, для 
  вычисления площади (можете выбрать какую то конкретную фигуру, а можете, 
  основываясь на переданных параметрах, выполнять требуемый алгоритм 
  вычисления площади для переданной в параметрах фигуры) и возвращать объект 
  вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, 
  для которой вычислялась площадь, input - входные параметры, по которым было 
  произведено вычисление.
 */

function calculateArea(figure, input) {
  const {a = 0, b = 0, r = 0} = input;
  let s = 0;
  switch (figure) {
    case 'rectangle': // площадь прямоугольника
      s = a * b;
      break;

    case 'circle': // площадь круга
      s = Math.PI * (r ** 2);
      break;

    case 'triangle': // площадь прямоугольного треугольника
      s = (1 / 2) * (a * b);
      break;

    default:
      break;
  }
  s = Math.round(s * 100) / 100;
  return { area: s, figure, input }
}

let result = calculateArea('rectangle', {a: 5, b: 10});
console.log(result);
result = calculateArea('circle', {r: 5});
console.log(result);
result = calculateArea('triangle', {a: 3, b: 4});
console.log(result);

/* 
3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников
(разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для
изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число),
dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department
(строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку
со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который
вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo
класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс
Human и вернет строку с параметрами Human'a.
 */
class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    return `name: ${this.name}, age: ${this.age}, dateOfBirth: ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }    

  displayInfo() {
    return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`;
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
  }

  setManager(manager) {
    this.manager = manager;
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this.developers = [];
  }

  addDeveloper(developer) {
    this.developers.push(developer);
  }

  removeDeveloper(developer) {
    const idx = developers.indexOf(developer);
    developers.splice(idx, 1);
  }
}

const kolyaMan = new Manager('Kolya', 30, '30.01.1988', 40000, 'office');
const vanyaDev = new Developer('Vanya', 29, '30.01.1989', 30000, 'home');

kolyaMan.addDeveloper(vanyaDev);
vanyaDev.setManager(kolyaMan);

console.log(vanyaDev.displayInfo());
console.log(kolyaMan.displayInfo());

/* 
4*. При помощи генератора написать функцию - анкету, которая запрашивает у
пользователя на ввод параметры и передаёт их в генератор. В конце, когда генератор
завершается, он должен вернуть все введённые входные параметры в виде объекта.
Этот объект нужно вывести в консоли.
 */
function* getUserInfo() {
  yield prompt('Как Вас зовут?', '');
  yield prompt('Сколько вам лет?', '');
}

const generator = getUserInfo();
const name = generator.next().value;
const age = generator.next().value;
const userInfo = {name, age}
console.log(userInfo);

/* 
5*. Написать цикл, который создаёт массив промисов, внутри каждого промиса
происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где
вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов.
Следует дождаться выполнения загрузки всеми промисами и далее вывести массив
загруженных данных
 */
const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const promisesArray = [];
for (let i = 1; i <= 10; i++) {
  const promise = new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}/${i}`, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

  promisesArray.push(promise);
}

Promise.all(promisesArray).then(results => {
  console.log(results);
});