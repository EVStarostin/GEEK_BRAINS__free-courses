/*
  1. Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
  Алгоритм решения:
  1. Создайте класс Bird.
  2. Добавьте птичке свойства name, points, wasEaten.
  3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
  4. Запустите цикл: до тех пор, пока не останется только одна живая птичка. Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую (та, которая съедена, становится wasEaten=true, а та, которую покормили, — point++).
*/

class Bird {

  constructor(name) {
    this.name = name;
    this.points = 0;
    this.wasEaten = false;
  }

  eat(birdsToBeEaten) {
    let rand;

    do {
      rand = Math.floor(Math.random() * (birdsToBeEaten.length - 0)) + 0;
    } while (rand === birdsToBeEaten.indexOf(this));

    birdsToBeEaten[rand].die();
    birdsToBeEaten.splice(rand, 1);
    this.points++;
  }

  die() {
    this.wasEaten = true;
  }

  info() {
    console.log("name: " + this.name + "\npoints: " + this.points);
  }

}

const birds = [];

for (let i = 1; i <= 10; i++) {
  birds.push(new Bird(`Bird ${i}`));
}

const birdsAlive = birds.slice();

while ( birdsAlive.length > 1 ) {
  const rand = Math.floor(Math.random() * (birdsAlive.length - 0)) + 0;
  birdsAlive[rand].eat(birdsAlive);
}

const winner = birdsAlive[0];
winner.info();
