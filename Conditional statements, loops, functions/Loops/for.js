//EXERCISE ONE 

let minutesTraining = [15, 12, 13, 20];
let trainingDays = minutesTraining.length;
let totalMinutes = 0;
for (let q = 0; q < trainingDays; q++) {
    totalMinutes += minutesTraining[q];
}
console.log(`Per ${trainingDays} dienas Zinas buvo dresuojamas ${totalMinutes}. Vidutiniškai per dieną katinas buvo dresuojamas ${totalMinutes/trainingDays} minučių.`);

//EXERCISE TWO

let firstDayStrawberryCount = 4;
const everyDayMoreCount = 5;
const strawberriesAfterSomeDays = 3;
let totalStrawberries = 0;
for (let e = 0; e < strawberriesAfterSomeDays; e++) {
    totalStrawberries += (firstDayStrawberryCount + everyDayMoreCount);
}
console.log(`Per ${strawberriesAfterSomeDays} dienas prinoko ${totalStrawberries} braškės.`);

//EXERCISE THREE

const kp = 100; // pradine kaina
const n = 4; // dalyviu skaicius
let d = [5, 7, 5, 5];
let kg = 0; // galutine kaina

for (let w = 0; w < n; w++) {
    kg += d[w];
}
console.log(`Galutinė prekės kaina bus ${kg+kp} litai.`);

//EXERCISE FOUR

let number = 5;
let list = [];

let a = 0;
for (let r = 1; r < number; r++) {
    if (number % r == 0) {
        list[a++] = r;
    }
}

let fourSum = 0;
for (let t = 0; t < list.length; t++) {
    if (typeof list !== 'undefined') {
        fourSum += list[t];
    }
}

if (fourSum == number) {
    console.log("Yes");
} else {
    console.log("No");
}

//EXERCISE FIVE

let s = 7;
let times = 5;
let sumNumbers = 0;
let temporary = 0;

for (let e = 0; e < times; e++) {
    temporary += s * Math.pow(10, e);
    sumNumbers += temporary;
}
console.log(`${sumNumbers}`);
