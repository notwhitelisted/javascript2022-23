'use strict';

//////////////////Default Parameters
// const bookingArr = [];

// const createBooking = function(flightNum, numPassengers = 1, price = '$199') {
//     const booking = {
//         flightNum, numPassengers, price
//     }
//     console.log(booking);
//     bookingArr.push(booking);
// }

// createBooking('LH123');
// createBooking('LH252', 400, '$652');
// createBooking('Lh123', 2, '$800');

//////////////////How passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const aaron = {
//     name: 'Aaron Tang',
//     passport: 123123123123
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name; 

//     if (passenger.passport === 123123123123) {
//         alert('Check in')
//     } else {
//         alert('Wrong passport')
//     }
// }

// checkIn(flight, aaron);
// console.log(flight);
// console.log(aaron);

//objects was changed when passed through function - b/c passing reference type 
//through a function is referenced to object in memory heap

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(aaron);
// checkIn(flight, aaron); //error - says 'Wrong passport' because 2 functions 
//manipulating the same object 

//passing by reference - pass to reference and original value outside of function would be changed
//JS cannot do pass by reference typically, but can do it with objects
//objects are passed through the heap and that memory stores a specific value

//////////////////////First Class and Higher Order Functions
//JS treats functions as first-class citizens
//functions are simply values
//functions are just another "Type" of object 

//Higher-order functions
//function that recevies another function as an arugment --> retrusn new function or both
//only possible because of first-class functions 
//function that gets passed into higher-order function => callback function
//callback functions gets called later by higher-order function

//////////////////////Functions Accepting Callback Functions
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //higher-order function - takes in a function
// const transformer = function(str, func) {
//     console.log(`original string: ${str}`);
//     console.log(`transformed string: ${func(str)}`);
    
//     console.log(`transformed by: ${func.name}`);
// }
// transformer('javascript is the best', upperFirstWord);
// console.log('---------------------------------------')
// transformer('javascript is the best', oneWord);

//abstraction - callback functions create this. hide detail of code implentation 
//because we don't care about it at this level. 

///////////////////functions returning functions 
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeter = greet('hey');
// greeter('aaron');
// greeter('brian');

// greet('hello')('steven');

///////arrow function challenge
// const griddy = (griddying) => {
//     return (nombre) => {
//         console.log(`${griddying} ${nombre}`);
//     }
// }
// griddy('what`s good')('lebron');

/////////////////////call and apply methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book: function(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `this.${this.iataCode}${flightNum}`, name});
//     },
// };

//this keyword points to the object name itself. and pulls from that key

// lufthansa.book(239, 'Aaron Tang');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

//doesn't work
//book(23, 'sarah williams');


/////call method - takes in arguments and pass into functions
// book.call(eurowings, 23, 'sarah williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'brian tang'); //lufthansa = this.keyword, arguments for the function
// console.log(lufthansa);

// const swiss = {
//     airline: 'swiss air lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'mary cooper');
//console.log(swiss);

//////apply method - takes in array of arguments and pass into function
// const flightData = [583, 'george bush'];
// book.apply(swiss, flightData) //swiss = this.keyword, argument of arrays for the function 
// console.log(swiss)

//both apply and call methods - allow you to explicitly define this.keyword in any function

//////bind method - allows to manually set this.keyword to any function call. 
//returns new function where this.keyword is bound - set to whatever value 
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'steven williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('aaron tang');
// bookEW23('vincent tang');

////////with event listeners 
// lufthansa.planes = 300; 
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

////////partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); 
// console.log(addVAT(100)); //123
// console.log(addVAT(23)); //28.29

// const returnFN = function(rate) {
//     return function(value) {
//         return(value + value *rate);
//     }
// }
// const addVAT2 = returnFN(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//////////////////////////////Coding Challenge #1
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
      // This generates [0, 0, 0, 0]. More in the next section 
    answers: new Array(4).fill(0),
    registerNewAnswer: function() {
        const array = [];
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
    )
    //console.log(answer)

    //Registering Answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    console.log(this.answers);
    

    this.displayResults();
    this.displayResults('string');
    
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            //poll results are 13, 2, 4, 1
            console.log(`poll results are ${this.answers.join(', ')}`);
        }   
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//////////////Closures
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

//////closure
//-closed-over variable environment of the execution context in which
//a function was created, even after that execution context is gone;

//gives a function access to all the variables of its parent function,
//even after that parent function has returned. 
//the function keeps a reference to its outer scope, which preserves
//the scope chain throughout time. 

//a closure makes sure that a function doesn't lose connection to variables
//that existed at the function's birth place 

//closure is like a backpack that a function carries around wherever it goes
//this backpack has all the variables that were present in the environment where
//the function was created 

//****
//do not have to manually create closures. JS feature allows for this to happen
//automatically. can't access closed-over variables explicitly. closure is NOT tangible JS object

console.dir(booker);

/////////more closures

//ex1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();

//reassigning f function
h();
f();
console.dir(f);

//ex2
const boardPassengers = function(n, waitTime) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, waitTime * 1000);

    console.log(`Will start boarding in ${waitTime} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3)




