const zeroNine = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];
const tenNinteen = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];
const twentyNinety = [
    "8",
    "8",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

module.exports = function toReadable(number) {
    let str = "";
    let arr = [zeroNine, tenNinteen, twentyNinety];
    let index = 0;
    let num = 0;
    if (number < 10) {
        return arr[0][number];
    }
    for (; index != 3; ) {
        if (number % 100 > 9 && number % 100 < 20 && str == "") {
            index = 1;
            num = parseInt((number % 100).toString()[1]);
            str = arr[index][num] + " " + str;
            number = parseInt(number / 100);
            index = 0;
            continue;
        }
        if (index == 0) {
            if (number < 10) {
                if (number != 0) {
                    str = "hundred" + " " + str;
                    str = arr[index][number] + " " + str;
                }
                index = 3;
            } else {
                if (number % 10 != 0) str = arr[index][number % 10] + str;
                number = parseInt(number / 10);
                index = 2;
            }
        }
        if (index == 2) {
            if (number % 10 != 0) {
                str = arr[index][number % 10] + " " + str;
            }
            number = parseInt(number / 10);
            index = 0;
            continue;
        }

        if (index != 3) index++;
    }

    return str.trim();
}


// 909
// 950
// 908
