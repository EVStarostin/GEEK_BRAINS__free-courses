const fedorPoints = Math.round(Math.random() * (30 - 11) + 11),
      petrPoints = Math.round(Math.random() * (30 - 11) + 11);
let winner;

if ( (fedorPoints > 21) || ((petrPoints <= 21) && (petrPoints > fedorPoints)) ) {
  winner = "Петр";
} else if ( (petrPoints > 21) || (fedorPoints > petrPoints) ) {
  winner = "Федор";
}

console.log(
  "У Федора очков: " + fedorPoints + "\n" + 
  "У Петра очков: " + petrPoints + "\n" +
  (winner ? "Победитель: " + winner : "Ничья")
);
