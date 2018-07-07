const fedorPoints = Math.round(Math.random() * (30 - 11) + 11),
      petrPoints = Math.round(Math.random() * (30 - 11) + 11);
let winner;

if ( (fedorPoints > 21) || ((petrPoints <= 21) && (21 - petrPoints < 21 - fedorPoints)) ) {
  winner = "Петр";
} else if ( (petrPoints > 21) || (21 - fedorPoints < 21 - petrPoints) ) {
  winner = "Федор";
}

console.log(
  "У Федора " + fedorPoints + " очков\n" + 
  "У Петра " + petrPoints + " очков\n" +
  (winner ? "Победил " + winner : "Ничья")
);