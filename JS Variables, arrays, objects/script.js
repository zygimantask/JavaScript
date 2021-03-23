// EXERCISE ONE

let metai = '28';
let vardas = 'Zygimantas';
let hobis = 'automobiliai';

console.log(`Mano vardas ${vardas}, man ${metai}. Mano hobis yra ${hobis}.`);

// EXERCISE TWO

 let birthDate = '1993';
 let futureYear = '2025';
 let yearsOld = futureYear - birthDate;

console.log(`${futureYear} metais man bus ${yearsOld} arba (${yearsOld-1} metai/metu).`);

// EXERCISE THREE

let diameter = 14;
let radius = diameter/2;
let area = Math.PI*(Math.pow(radius, 2));

console.log(`Apskritimo, kurio skersmuo yra ${diameter}cm, plotas yra ${area}cm2.`);

// EXERCISE Four

let celsius =	23;
let farenheit = (celsius * 1.8) + 32;
  // formula
  // (C * 1.8) + 32 = F
console.log(`${celsius}°C yra ${farenheit}°F.`);

// EXERCISE FIVE

let string = 'Mes kalbame mazai, jeigu nekalbame apie save.'

console.log(`Teksto ilgis: ${string.length}`);
console.log(`Didziosiomis raidemis: ${string.toUpperCase()}`);
console.log(`Panaikiname zodzius: ${string.slice(0, 35)}`);

let array = string.split(' ');
console.log(array);
console.log(`Index of string 'mazai': ${string.indexOf('mazai')}`);

console.log(string.replace('kalbame', 'snekame'));

// EXERCISE SIX

let sentence = 'laBa8s rYta56s, lIEtuva';
let newSentence = sentence.replace(/[0-9]/g, '');
let newerSentene = newSentence.toLocaleLowerCase();
let newestSentence = newerSentene.replace('labas', 'Labas');
let doneSentence = newestSentence.replace('lietuva', 'Lietuva');
console.log(sentence);
console.log(doneSentence);

// EXERCISE SEVEN

const masyvas = [];
masyvas[0] = 1;
masyvas[1] = 2;
masyvas[2] = 3;
masyvas[3] = 4;
masyvas[4] = 5;
masyvas[5] = 6;
masyvas[6] = 7;
masyvas[7] = 8;
masyvas[8] = 9;
masyvas[9] = 10;

// modified original array
const masyvas2 = Array.from(masyvas);
masyvas2.pop(10);
masyvas2.shift(0);
masyvas2[5] = 'new';
console.log(masyvas2);
console.log(masyvas);

// joining two arrays
const newArray = masyvas.concat(masyvas2);
console.log(newArray);

// separating with comma ant whitespace
const x = newArray.join(', ');
console.log(x);

// EXERCISE EIGHT

let student = [
{
  name : 'Martynas',
  surname : 'Lubys',
  age : 17,
  averageGrade : 4.5,
  scholarship : false,
},
{
  name : 'Alina',
  surname : 'Alijeva',
  age : 16,
  averageGrade : 9,
  scholarship : true,
},
{
  name : 'Kazimieras',
  surname : 'Bakstys',
  age : 17,
  averageGrade : 9.3,
  scholarship : true,
},
{
  name : 'Algimantas',
  surname : 'Peraitis',
  age : 16,
  averageGrade : 6.5,
  scholarship : true,
},
{
  name : 'Kotryna',
  surname : 'Petraityte',
  age : 16,
  averageGrade : 4,
  scholarship : false,
}
];

// EXERCISE NINE

console.log(`Alinos amzius: ${student[2].age}`);
console.log(`Algimanto vidurkis: ${student[4].averageGrade}`);
console.log(student[0]);
