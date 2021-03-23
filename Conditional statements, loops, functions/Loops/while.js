// EXERCISE ONE

let mm = 3;
let nn = 5;
let mmmmmmmmmmm = mm;
let nnnnnnnnnnn = nn;
let bmk = 0;

// DBD

while (Math.abs(mm) && Math.abs(nn))
    if (Math.abs(mm) > Math.abs(nn)) mm %= nn;
    else nn %= mm;
let dbd = mm + nn;

//MBK
bmk = (mmmmmmmmmmm * nnnnnnnnnnn) / dbd;
console.log(`BMK = ${bmk}`);

// EXERCISE TWO

let salary = 100;
let initial_salary = salary;
let increase = 50;
let months_passed = 0;
let threeMonths = 0;
let twelveMonths = 0;
let total = 0;
let double = 0;
let skip = false;

while (salary < 4000) {
    total += salary;
    months_passed++;
    if (months_passed == 3) {
        threeMonths = total;
    }
    if (months_passed == 12) {
        twelveMonths = total;
    }
    if ((salary > initial_salary * 2) && !skip) {
        double = months_passed;
        skip = true;
    }
    salary += increase;
}

const salaries = {
    yearSalary: 'Po 1 metų atlyginimas bus ' + twelveMonths + '.',
    threeMonthSalary: 'Po 3 mėnesių atlyginimas bus ' + threeMonths + '.',
    doubleSalary: 'Po ' + double + ' mėnesių atlyginimas bus dvigubai didesnis.',
    notLessThanFourK: 'Po ' + months_passed + ' mėnesių uždirbs nemažiau 4000.'
}

console.log(salaries.yearSalary);
console.log(salaries.threeMonthSalary);
console.log(salaries.doubleSalary);
console.log(salaries.notLessThanFourK);

// EXERCISE THREE

let originalNumber = 1234;
let reversedNumber = 0;
let remainder;

while (originalNumber > 0) {
    remainder = originalNumber % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    originalNumber = Math.floor(originalNumber / 10);
}

console.log(`${reversedNumber}`);

// EXERCISE FOUR

const naturalNumber = 6;
let start = 1;
let naturalNumberSum = 0;

while (start <= naturalNumber) {
    console.log(start);
    start++;
    naturalNumberSum += start;
    if (naturalNumberSum == naturalNumber) {
        console.log('skaiciu suma yra lygi sios sekos nariu sumai');
        break;
    } else if (naturalNumberSum > naturalNumber) {
        console.log('skaiciu suma yra per didele ');
        break;
    }
}

console.log(naturalNumberSum);

// EXERCISE SIX

const nnn = 120;

let counter = 1;
let sum = 0;
while (sum < nnn) {
    if (sum == 0) {
        sum = counter;
    }
    sum *= counter++;
}

if (sum == nnn) {
    console.log("yes: "+--counter);
} else {
    console.log("no");
}
