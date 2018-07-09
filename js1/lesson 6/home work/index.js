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

while ( birdsAlive.filter( bird => bird.wasEaten === false ).length > 1 ) {
  const rand = Math.floor(Math.random() * (birdsAlive.length - 0)) + 0;
  birdsAlive[rand].eat(birdsAlive);
}

const winner = birdsAlive[0];
winner.info();
