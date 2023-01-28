'use strict'; //use this. helps with finding errors and makes it easier to debug.

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = 'audio;'


/////////////////Functions
function logger() {
    console.log('My name is Aaron');
}

//calling, running, invoking function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const moreJuice = fruitProcessor(2, 5);
console.log(moreJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration = not saved to a variable. just declared. 
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const myAge = calcAge1(1999);
console.log(calcAge1);
console.log(myAge);

//function expression = b/c set to a variable 
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const myAge2 = calcAge2(1998);
console.log(myAge, myAge2);

//arrow function
const myAge3 = birthYear => 2022 - birthYear;
const age3 = myAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Aaron'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice; 
}

console.log(fruitProcessor(2, 3));



const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1999, 'Aaron'));
console.log(yearsUntilRetirement(1950, 'Minkeyyyy'))

//////////////////Coding Challenge #1
const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
} 

const avgDolphins = calcAverage(44, 23, 71); //46
const avgKoalas = calcAverage(65, 54, 49); //56

const avgDolphins2 = calcAverage(85, 54, 41); //60
const avgKoalas2 = calcAverage(23, 34, 27); //28

function checkWinner(averageDolphins, averageKoalas) {
    if (averageDolphins >= averageKoalas * 2) {
        console.log(`The dolphins win! ${averageDolphins} vs. ${averageKoalas}.`);
    } else if (averageKoalas >= averageDolphins * 2) {
        console.log(`The koalas win! ${averageKoalas} vs. ${averageDolphins}.`);
    } else {
        console.log(`No one wins.`);
    }
}

function checkWinner2(averageDolphins, averageKoalas) {
    if (averageDolphins >= averageKoalas * 2) {
        console.log(`The dolphins win! ${averageDolphins} vs. ${averageKoalas}.`);
    } else if (averageKoalas >= averageDolphins * 2) {
        console.log(`The koalas win! ${averageKoalas} vs. ${averageDolphins}.`);
    } else {
        console.log(`No one wins.`);
    }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner2(avgDolphins2, avgKoalas2);

////////////Arrays
const friend1 = 'michael';
const friend2 = 'steve';
const friend3 = 'peter';

const friends = ['michael', 'steve', 'peter'];
console.log(friends);

const years = new Array(1991, 1994, 2992, 1922);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'jay';
console.log(friends[1]);
console.log(friends[friends.length - 2]);
console.log(friends);

const firstName = 'Ron';
const aaron = [firstName, 'Tang', 1999-1232, 'teacher', friends];
console.log(aaron);
console.log(aaron.length);


/////////Array Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

const friends = ['michael', 'steve', 'peter'];
friends.push('jay');
console.log(friends);
console.log(friends.length);
const newFriends = friends.push('jay');
console.log(newFriends);

friends.unshift('john');
console.log(friends);

friends.pop();
console.log(friends);
const whichFriend = friends.pop();
console.log(whichFriend);

//////////Coding Challenge #2; 
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
} 

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(bill, tips);

const total = [[bill[0] + tips[0]], bill[1] + tips[1], bill[2] + tips[2]];
console.log(total);



///////////Objects: Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };

console.log(jonas.lastName);
console.log(jonas['lastName']); //you can put any expression in the bracket
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); //passes through any of the keys in the object. 
    
} else {
    console.log('wrong object request');
}

jonas.location = 'america';
jonas['twitter'] = '@yerrrr';
console.log(jonas);
///////////Challenge
console.log(jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//////////Objects Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function(birthYear) {
    //     console.log(this); //prints out the data structure objects because it is what 'this' is referring to. 
    //     return 2037 - this.birthYear; //refers to object named jonas 
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear; //using this.age = creates new property = creating jonas.age
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

//////////Challenge - write a method getSummary
//'Jonas is 46yo teacher, and he has a driver's license'

console.log(jonas.getSummary());

///////////////Coding Challenge #3
const dataMark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',
    calcBMI: function() {
        let bmiMark = (this.mass / this.height ** 2);
        return bmiMark;
    }
}

const dataJohn = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',
    calcBMI: function() {
        let bmiJohn = (this.mass / this.height ** 2);
        return bmiJohn;
    }
}

console.log(dataMark.calcBMI(), dataJohn.calcBMI());
if (dataMark.calcBMI() > dataJohn.calcBMI()) {
    console.log(`${dataMark.fullName}'s BMI, ${dataMark.calcBMI()} is higher than ${dataJohn.fullName} BMI, ${dataJohn.calcBMI()}`)
} else {
    console.log(`${dataJohn.fullName}'s BMI, ${dataJohn.calcBMI()} is higher than ${dataMark.fullName} BMI, ${dataMark.calcBMI()}`)
}

///////////Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

  const types = [];

  for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types of array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
  }

  console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

const jonas2 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
  ];

for (let i = jonas2.length - 1; i >= 0; i++) {
    console.log(i);
    console.log(jonas[i]);
}

/////////Nested Loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------------- Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`lifting weight repitition ${rep}`);
    }
}

/////////While Loop
let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights repitition ${rep}`);
    rep++;
}

let dice = Math.floor(Math.random() * 6);
while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.floor(Math.random() * 6);
    if (dice === 6) {
        console.log(`you rolled a 6.`);
    }
}

*/
////////////Coding Challenge #4: 
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
    // let tip = calcTip(bills[i]);
    // tips.push(tip)
    // totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


////////////cOding challegen #4: Bonus
// let calcAverage = function(arr) {
//     let sum = 0;
//     for ( let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));