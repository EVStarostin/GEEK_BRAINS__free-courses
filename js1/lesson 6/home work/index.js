class Bird {

  constructor(name) {
    this.name = name;
    this.points = 0;
    this.wasEaten = false;
  }

  eat(birds) {
    let rand;

    do {
      rand = Math.floor(Math.random() * (birds.length - 0)) + 0;
    } while (rand === birds.indexOf(this));

    birds[rand].die();
    birds.splice(rand, 1);
    this.points++;
  }

  die() {
    this.wasEaten = true;
  }

  info() {
    console.log("name: " + this.name + "\npoints: " + this.points);
  }

}

const bird1 = new Bird("Bird 1"),
    bird2 = new Bird("Bird 2"),
    bird3 = new Bird("Bird 3"),
    bird4 = new Bird("Bird 4"),
    bird5 = new Bird("Bird 5"),
    bird6 = new Bird("Bird 6"),
    bird7 = new Bird("Bird 7"),
    bird8 = new Bird("Bird 8"),
    bird9 = new Bird("Bird 9"),
    bird10 = new Bird("Bird 10");

const birdsAlive = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10];

while ( birdsAlive.filter( bird => bird.wasEaten === false ).length > 1 ) {
  const rand = Math.floor(Math.random() * (birdsAlive.length - 0)) + 0;
  birdsAlive[rand].eat(birdsAlive);
}

const winner = birdsAlive[0];
winner.info();
