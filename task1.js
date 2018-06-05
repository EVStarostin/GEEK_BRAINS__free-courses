var str = process.argv[2];
var normalStr = str.replace(/\W|\_/g, "").toLowerCase();
var reverseStr = normalStr.split("").reverse().join("");

if (normalStr === reverseStr) {
    var isPalindrome = 'YES';
} else {
    var isPalindrome = 'NO';
}

process.stdout.write(isPalindrome);
