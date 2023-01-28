/*

//////////////////Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
javascriptIsFun = 'YES!'; //new assignment to variable

let year;
console.log(year); //undefined
console.log(typeof year); //undefined 
year = 1991; //new assignment to variable
console.log(typeof year);
console.log(typeof null); //similar to undefined. = null 

/////////////////let, const, var
let age = 30;
age = 31; 
const birthYear = 1999;
// birthYear = 2022; cannot reassign const 
// const job; needs initial value. doesn't work like let 

/////////////////Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18; //boolean value 
console.log(now - 1991 > now - 2018);

/////////////////Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 ASSIGNMENT WORKS FROM R TO LEFT
console.log(x, y);

*/

/////////////////Coding Challenge #1 
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markWeightTwo = 95;
const markHeightTwo = 1.88;
const johnWeightTwo = 85;
const johnHeightTwo = 1.76;

let bmiMark = markWeight / markHeight ** 2; 
let bmiJohn = johnWeight / johnHeight ** 2;
const higherBMI = bmiMark > bmiJohn; 

console.log(bmiMark, bmiJohn, higherBMI);

let bmiMark2 = markWeightTwo / markHeightTwo ** 2;
let bmiJohn2 = johnWeightTwo / johnHeightTwo ** 2;
const higherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark2, bmiJohn2, higherBMI2);

////////////////Strings and Template Literals
/*
const firstName = 'Aaron';
const job = 'student';
const birthYear = 1999;
const year = 2022;

const aaron = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(aaron);

console.log(`Just a regular string...`);

//using \n\
console.log('String with \n\
multiple \n\
lines');

//using string template literal to make new line
console.log(`String
multiple
lines`);


////////////////Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/////////////////Coding Challenge #2
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI @ ${bmiMark} is greater than John's BMI @ ${bmiJohn}`)
} else {
    console.log(`John's BMI, ${bmiJohn} is greater than Mark's BMI, ${bmiMark}`)
}

if (bmiMark2> bmiJohn2) {
    console.log(`Mark's BMI @ ${bmiMark2} is greater than John's BMI @ ${bmiJohn2}`)
} else {
    console.log(`John's BMI, ${bmiJohn2} is greater than Mark's BMI, ${bmiMark2}`)
}

/*
/////////////////Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); //number 

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

/////////////Truthy and Falsy Values
//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //returns false 
console.log(Boolean(undefined)); //false 
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true 
console.log(Boolean('')); //false 

const money = 100;
if (money) {
  console.log("Don't spend it all ;)"); //this will get printed out 
} else {
  console.log('You should get a job!');
}

let height = 0; //ZERO is falsey
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED'); // this will get printed out
}

////////////Logical Operators 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

*******or operator can be false if both A or B are both false 
-usually, it is A or B. one of them is true.
*/

////////////////Coding Challenge #3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy!');
}

//Bonus:
const scoreDolphins2 = (97 + 112 + 80) / 3;
const scoreKoalas2 = (109 + 95 + 50) / 3;
console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
    console.log('Dolphins win the trophy 🏆');
  } else if (scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100) {
    console.log('Koalas win the trophy 🏆');
  } else if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {
    console.log('Both win the trophy!');
  } else {
    console.log('No one wins the trophy 😭');
  }

//////////////Switch Statement
/*
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

////////////Conditional (Ternary) Operator
const age = 23;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

*/

/////////////Coding Challenge #4
let bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log( `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

let bill2 = 40;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.20;
console.log( `The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

let bill3 = 430;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.20;
console.log( `The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);