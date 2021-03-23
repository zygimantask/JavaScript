// EXERCISE ONE (a, b)

function luggagePrice(m1, m2, b) {
    // m1 - first luggage weight
    // m2 - second luggage weight
    // b - price per kg of luggage weight
    const s = (m1 + m2) * b;
    const avgKG = (m1 + m2) / 2;
    let counter = 0;

    if ((m1 <= 10) && (m2 <= 10)) {
        counter = counter + 2;
    } else if (m1 <= 10 || m2 <= 10) {
        counter = counter + 1;
    } else {
        counter = 0;
    }

    return console.log(`Luggage price: ${s} Eur`) + console.log(`Average kg of luggage : ${avgKG}`) + console.log(`Luggage less than 10kg: ${counter}`);
}

luggagePrice(1, 1, 2);

// EXERCISE ONE (c)

const friendsLuggage = [13, 12, 2221, 34, 17];
let pricePerKg = 3;

function luggagePrice2(friendsLuggage, pricePerKg) {
    let counterOfFriends = friendsLuggage.length;

    // counter of total luggage weight
    let counter2 = 0;
    for (let j = 0; j < counterOfFriends; j++) {
        counter2 += friendsLuggage[j];
    }

    // counter of friends which have 10kg or less luggage weight
    let counter3 = 0;
    for (let i = 0; i < counterOfFriends; i++) {
        if (friendsLuggage[i] <= 10) {
            counter3++;
        }
    }

    console.log(`Total luggage weight: ${counter2}Kg`);
    console.log(`Total price for luggage weight: ${counter2*pricePerKg}Eur`);
    console.log(`Average luggage weight per person: ${counter2/counterOfFriends}Kg`);
    console.log(`Number of friends that have less than 10kg luggage weight: ${counter3}`);
}

luggagePrice2(friendsLuggage, pricePerKg);

// EXERCISE TWO

const programmers = [7, 6, 6];

function exerciseCounter(programmers) {

    let numberOfProgrammers = programmers.length;
    let exerciseCounter = 0;

    // counts how many exercises total programmers acomplished
    for (let q = 0; q < numberOfProgrammers; q++) {
        exerciseCounter += programmers[q];
    }

    console.log(`${numberOfProgrammers} olimpiadoje dalyvave programuotojai issprende ${exerciseCounter} uzdaviniu.`);
}

exerciseCounter(programmers);

// EXERCISE THREE

const minutes = [18, 10, 10];

function minuteCalc(minutes) {

    let totalVisits = minutes.length;
    let totalMinutes = 0;

    // counts total minutes spent on visit
    for (let w = 0; w < totalVisits; w++) {
        totalMinutes += minutes[w];
    }

    // counts how many visitors spent more than 20 minutes
    let moreThanTwenty = 0;
    for (let e = 0; e < totalVisits; e++) {
        if (minuteCalc[e] >= 20) {
            moreThanTwenty++;
        }
    }
    console.log('Average time for one patient: ' + (totalMinutes / totalVisits).toFixed(2) + ' min');
    console.log(`Number of patients whose visits were longer than 20 minutes: ${moreThanTwenty}`);
}

minuteCalc(minutes);

// EXERCISE FOUR


const n = 3; // bus count

const v1 = 1; // first bus time travel in hrs
const mm1 = 50; // first bus time travel in minutes
const k1 = 17; // passanger count

const v2 = 2;
const mm2 = 5;
const k2 = 25;

const v3 = 1;
const mm3 = 55;
const k3 = 20;

function travel(n, v1, mm1, k1, v2, mm2, k2, v3, mm3, k3) {
    let kv = k1 + k2 + k3;
    let t = Math.round((n / (v1 + v2 + v3) / 60) + (mm1 + mm2 + mm3));
    let passangerCounter = 0;
    for (let e = 0; e < n; e++) {
        if ((k1 || k2 || k3) <= 10) {
            passangerCounter++;
        }
    }
    console.log(`kv = ${kv}, t = ${t}, k = ${passangerCounter}.`);
}

travel(n, v1, mm1, k1, v2, mm2, k2, v3, mm3, k3);

// EXERCISE FIVE

let firstDayStrawberryCount = 4;
const everyDayMoreCount = 5;
const strawberriesAfterSomeDays = 3;

function strawberries(firstDayStrawberryCount, everyDayMoreCount, strawberriesAfterSomeDays) {
    let totalStrawberries = 0;
    for (let e = 0; e < strawberriesAfterSomeDays; e++) {
        totalStrawberries += (firstDayStrawberryCount + everyDayMoreCount);
    }
    console.log(`Per ${strawberriesAfterSomeDays} dienas prinoko ${totalStrawberries} braškės.`);

}

strawberries(firstDayStrawberryCount, everyDayMoreCount, strawberriesAfterSomeDays);

// EXERCISE SIX

let arrayStart = 31;
let arrayEnd = 62;

function iceCreamWinner(arrayStart, arrayEnd) {
    let winnerCounter = 0;
    let iceCream = [];
    for (let r = arrayStart; r < arrayEnd + 1; r++) {
        iceCream[r] = arrayStart++;
        if (iceCream[r] % 6 == 0) {
            winnerCounter++;
        }
    }
    console.log(`Reikalingas porcijų skaičius: ${winnerCounter}`)
}

iceCreamWinner(arrayStart, arrayEnd);

// EXERCISE SEVEN

let m = 17;
bookCounter(m);

function bookCounter(m) {
    let temp = m;
    let counters = 0;
    while (temp > 0) {
        counters++;
        temp -= counters;
    }

    let averageChapters = m * 1.0 / counters;
    console.log(`Tadas visą knygą perskaitys per ${counters} dienas (-ų). Tadas vidutiniškai per dieną perskaitė ${averageChapters.toFixed(2)} skyrius (-ų).`);
}
