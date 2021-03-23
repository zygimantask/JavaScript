// EXERCISE 1

const n = 4; // first buyer
const m = 3; // second buyer

if (n < m) {
  console.log(`Ilgiau aptarnaujamas antrasis pirkejas`);
} else if (m < n) {
  console.log(`Ilgiau aptarnaujamas pirmasis pirkejas`);
} else {
  console.log(`Abu pirkejai aptarnaujami vienodai`);
}

// EXERCISE 2

const z = 3; // Jonas
const x = 2; // Povilas

if (z < x) {
  console.log(`Turnyra laimejo Povilas`);
} else if (z > x) {
  console.log(`Turnyra laimejo Jonas`);
} else {
  console.log(`Lygybe`);
}

// EXERCISE 3

const q = 300; // Martynas candy weight
const w = 200; // Karolis candy weight

if (q < w) {
  console.log(`Daugiau saldainiu pirko Karolis`);
} else if (q > w) {
  console.log(`Daugiau saldainiu pirko Martynas`);
} else {
  console.log(`Abu pirko tiek pat saldainiu`);
}

// EXERCISE 4

const firstOlympicsYear = 1896;
const checkYear = 2000;

if ((checkYear % 4 == 0)) {
  const number = ((checkYear - firstOlympicsYear) / 4);
  console.log(`${checkYear} metais buvo ${number} olimpines zaidynes`)
} else {
  console.log(`Metai neolimpiniai`);
}

// EXERCISE 5

const lessonTime = 3;

if (lessonTime >= 30) {
  console.log(`Liko dar labai daug laiko`);
} else if (lessonTime >= 15) {
  console.log(`Liko dar nemazai laiko`);
} else if (lessonTime >= 7) {
  console.log(`Liko nedaug laiko`);
} else {
  console.log(`Pamoka baigiasi`);
}

// EXERCISE 6

const newYear = 2013;

if (newYear % 4 == 0 || newYear % 400 == 0) {
  console.log(`Metai yra keliamieji`);
} else {
  console.log(`Metai yra paprastieji`);
}

// EXERCISE 7

let ticket = 932378;
let ticketSum = 0;

while (ticket) {
  ticketSum += ticket % 10;
  ticket = Math.floor(ticket / 10);
}

if (ticketSum % 4 == 0) {
  console.log(`Congratulations! You won the prize!`);
} else {
  console.log(`Try again...`);
}

// EXERCISE 8

const booksToRead = 10; // n
const averagePagesPerBook = 200; // p
const p1 = 20; // pages read on Monday
const p2 = 30; // pages read on Tuesday
const p3 = 30; // pages read on Wednesday
const p4 = 20; // pages read on Thursday
const p5 = 20; // pages read on Friday
const weeks = 11; // weeks that read books

const totalPagesToRead = booksToRead * averagePagesPerBook;
const totalPagesReadPerWeeks = ((p1 + p2 + p3 + p4 + p5) * weeks);

if (totalPagesToRead > totalPagesReadPerWeeks) {
  console.log(`Jonas knygu perskaityti nespes`);
} else {
  console.log(`Jonas knygas perskaityti spes`);
}

// EXERCISE 9

const n1 = 1;
const n2 = 1;
const n3 = 1;

if ((n1 && n2 && n3) == 1) {
  console.log(`Mokinys desimtuka gaus`);
} else {
  console.log(`Mokinys desimtuko negaus`);
}


// EXERCISE 10

const moneyToSpend = 4500;

if (moneyToSpend >= 4000) {
  console.log(`Jolantai geriausiai tiktu pirmos grupes kelione.`);
} else if ((moneyToSpend <= 3999) && (moneyToSpend >= 3000)) {
  console.log(`Jolantai geriausiai tiktu antros grupes kelione.`);
} else if ((moneyToSpend <= 2999) && (moneyToSpend >= 1000)) {
  console.log(`Jolantai geriausiai tiktu trecios grupes kelione.`);
} else {
  console.log(`Jolantai geriausiai tiktu ketvirtos grupes kelione.`);
}
