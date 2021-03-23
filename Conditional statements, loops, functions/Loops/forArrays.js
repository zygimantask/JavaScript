// EXERCISE ONE

const circleRadiusLength = [3, 6, 12, 19, 22, 3, 1, 5, 13, 21, 22];
let circleArrayLength = circleRadiusLength.length;
let maximumLength = 0;

for (let q = 0; q < circleArrayLength; q++) {
    if (circleRadiusLength[q] > maximumLength) {
        maximumLength = circleRadiusLength[q];
    }
}

let numberOfLongestRadiusLengthCircles = 0;
for (let q = 0; q < circleArrayLength; q++) {
    if (circleRadiusLength[q] == maximumLength) {
        numberOfLongestRadiusLengthCircles++;
    }
}

console.log("longest circle with radius of " + maximumLength);
console.log("ats: " + numberOfLongestRadiusLengthCircles);

// EXERCISE TWO

const indeliai_array = [3, 6, 1002, 10009, 22, 300, 130, 21, 2200];
let k = indeliai_array.length;
let count_over_1000 = 0;

for (let q = 0; q < k; q++) {
    if (indeliai_array[q] > 1000) {
        count_over_1000++;
    }
}

console.log("ats: " + count_over_1000);

// EXERCISE THREE


let A = [1, 2, 4, 3, 5, 8, 9, 10, 22, 333, 55, 44];

for (let i = 0; i < A.length - 1; i++) {
    for (let j = 0; j < A.length - i - 1; j++) {
        if (A[j] < A[j + 1]) {
            let temp = A[j];
            A[j] = A[j + 1];
            A[j + 1] = temp;
        }
    }
}

console.log(A);

// EXERCISE FOUR


//Duota bibliotekoje esanti kartoteka, kiekviename skyriuje yra tam tikras kiekis kortelių. Visi duomenys suvesti į masyvą A(n). Į lyginių numerių skyrius reikia pridėti po tiek kortelių, koks skyriaus numeris. Masyve bent 10 duomenų.


let AA = [1, 2, 4, 3, 5, 8, 9, 10, 22, 333, 55, 44];

for (let q = 0; q < AA.length; q++) {
    if (q % 2 == 1) {
        AA[q] += q + 1;
    }
}

for (let q = 0; q < AA.length; q++) {
    console.log((q + 1) + " skyriuje yra " + AA[q] + " korteliu/es")
}

// EXERCISE FIVE

//Masyve mok(m,n) surašyta m mokinių n dalykų pusmečių pažymiai. Sudarykite naują masyvą vid(m) sudarydami iš mokinių pažymių vidurkių. Vidurkius parodyti ekrane.

let mok = [
    [1, 2, 3],
    [5, 6, 7]
];

let vid = [];

for (let i = 0; i < mok.length; i++) {
    let sum = 0;
    for (let j = 0; j < mok[i].length; j++) {
        sum += mok[i][j];
    }

    vid[i] = sum * 1.0 / mok[i].length;
}

console.log(vid);
