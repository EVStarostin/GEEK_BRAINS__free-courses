// 1
const a = 5;
// 2
let s = 'a';
// 3
s = s + a;
// 4
let b = 5;
// 5
b = b + 1;
b++;
b += 1;
// 6
let li = [1, 2, 3, 4, 5, 6, 7, 8];
// 7
li.splice(3, 3);
// 8
li.push(10);
li.push(5000000000);
// 9
let ob = {
    numbers: ''
};
// 10
ob.numbers = li.join(';');
// 11
ob.newNumbers = li.join(';') + ';' + li[4] + ';' + li[4]
