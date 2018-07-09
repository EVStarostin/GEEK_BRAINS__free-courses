class Bird {

  constructor(name) {
    this.name = name;
    this.points = 0;
    this.wasEaten = false;
  }

  info() {
    console.log("name: " + this.name + "\npoints: " + this.points);
  }

}

let bird1 = new Bird("Bird 1"),
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
    let rand1,
        rand2;
    
    do {
        rand1 = Math.floor(Math.random() * (birdsAlive.length - 0)) + 0;
        rand2 = Math.floor(Math.random() * (birdsAlive.length - 0)) + 0;
    } while (rand1 === rand2)

    birdsAlive[rand1].points++;
    birdsAlive[rand2].wasEaten = true;
    birdsAlive.splice(rand2, 1);
}

const winner = birdsAlive[0];
winner.info();
