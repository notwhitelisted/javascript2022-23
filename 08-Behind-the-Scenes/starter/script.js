'use strict';
///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991); //46

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980); //57

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//       // console.log(this);
//       console.log(2037 - this.year);

//     // Solution 1
//     const self = this; // self or that
//     const isMillenial = function () {
//         console.log(self);
//         console.log(self.year >= 1981 && self.year <= 1996);
//         };
//         isMillenial();
//     },

//     // Solution 2
//     // const isMillenial = () => {
//     //     console.log(this);
//     //     console.log(this.year >= 1981 && this.year <= 1996);
//     //   };
//     //   isMillenial();
//     // },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//       },
// };
//     jonas.greet();
//     jonas.calcAge();

//     // arguments keyword
//     const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Tran';
let oldLastName = lastName;
lastName = 'Tang';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Tran',
    age: 27,
  };

//not new variable, just holds same reference to the OG object
const marriedJessica = jessica; //assigning same reference
marriedJessica.lastName = 'Tang';
console.log('before marriage', jessica);
console.log('after marriage', marriedJessica);

//cannot change the value of marriedJessica to a new memory address
//pretty much --> cannot reassign value of marriedJessica

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

//merging empty object with jessica2 object
//object.assign - creates a shallow copy. not a thorough copy of objects
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Tang';

console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessicaCopy);