/* 1. Федор и Петр играют в блэкджек. Набранные ими очки хранятся в виде числа в двух переменных fedorPoints и petrPoints. Нам нужно:
сохранить любые два числа в эти переменные,
вывести, кто из игроков победил. Правила блэкджека: Выигрывает тот, кто набрал число очков, максимально близкое к 21 (20 выигрывает у 19). Но первый, кто превысит 21 хоть на 1, — проиграл (19 выигрывает у 22). */

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
