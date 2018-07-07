// 1. Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2.

const resultArray = [];

for (let i = 1e4; i <= 15e4; i++) {
  const sum = (i-3) + (i-2) + (i-1);
  if ( sum % 100 === 52 && sum.toString()[1] === '2' ) {
    resultArray.push(i);
  }
}

console.log( resultArray.join('; ') );
