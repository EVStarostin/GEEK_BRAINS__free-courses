const fedorPoints = Math.round(Math.random() * (30 - 11) + 11);
console.log("У Федора " + fedorPoints + " очков");

const petrPoints = Math.round(Math.random() * (30 - 11) + 11);
console.log("У Петра " + petrPoints + " очков");

let winner;

if ( (fedorPoints > 21) || ((petrPoints <= 21) && (21 - petrPoints < 21 - fedorPoints)) ) {
  winner = "Петр";
} else if ( (petrPoints > 21) || (21 - fedorPoints < 21 - petrPoints) ) {
  winner = "Федор";
}

console.log(winner ? "Победил " + winner : "Ничья");