'use strict';
///////////////////////////NOTES
////////////OOP 
/*
-based on objects. use objects to model (describe) real-world or abstract features
-may contain data (properties) and code (methods). can pack data and corresponding behavior into one block
-objects are self-contained blocks of code and are building blocks of applications/interact with one another
-interactions happen through API
*/

///////////4 fundamental principles of OOP
/*
-abstraction: ignore/hide details that do not matter. getting a better ovewview
-encapsulation: keep properties and methods private inside that class, so they're not accessible from outside. 
    some can be exposed as API
-inheritance: child inherits properties and methods from parent class. allows for reuse of common logic to model real-world relationships
    child class can have its own methods and properties (extended user) 
-polymorphism: child class can overwrite a method it inherited from a parent class (basic knowledge)
*/

/*
objects are linked to prototype object; 
-prototypal inheritance contains methods (behavior) that are accessible to all objects linked to that prototype;
-ex: Array.prototype = prototype of all array objects we create in JavaScript. Therefore all arrays have access to map method

//////////3 ways of implementing prototypal inheritance
1. constructor functions - technical to create objects from a function
    how built-in objects like arrays, maps, or sets are actually implemented
2. es6 classes - modern alternative to constructor function syntax
    "syntactic sugar" - BTS, ES6 classes work exactly like constructor functions
    ES6 classes do NOT behave like classes in 'classical OOP'
3. object.create() - easiest and most straight forward way of linking an object to prototype object
*/

///////////Constructor Functions and New Operator
const Person = function(firstName, birthYear) {
    //instance properties 
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.calcAge = function() {
        console.log(2023 - this.birthYear);
    }
}
// const aaron = new Person('Aaron', 1999);
// console.log(aaron);

// const matilda = new Person('Matilda', 2017);
// const ron = new Person('Ron', 1975);
// console.log(matilda, ron);
//3 objects were constructed from constructor functions + new Operator

//Is aaron an instance of constructor function, Person? 
// console.log(aaron instanceof Person); //true
//console.log(michael instanceof Person); //false

///////////Prototypes
// Person.prototype.calcAge = function () {
//     console.log(2023 - this.birthYear);
// }
// aaron.calcAge();
// matilda.calcAge();
// ron.calcAge();

// console.log(Person.prototype.isPrototypeOf(aaron)); //true

// Person.prototype.species = 'homo sapiens';
// console.log(aaron, matilda, ron);
// console.log(aaron.species, matilda.species, ron.species); //inherited the prototypes.

// console.log(aaron.hasOwnProperty('firstName')); //true
// console.log(aaron.hasOwnProperty('species')) //false b/c prototype property of Person

//Rewatch Prototypal Inheritance and Prototype Chain 
// console.log(aaron.__proto__);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__);

///////////Coding Challenge #1 
// const car = function(carMake, speed) {
//     this.carMake = carMake;
//     this.speed = speed; 
// }
// const beemer = new car('bmw', 550);
// const benz = new car('mercedes', 525);
// //console.log(beemer, benz);

// car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.carMake} has ${this.speed} horse power when accelerating.`)
// }
// car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.carMake} has ${this.speed} horse power when breaking.`) 
// }
// beemer.accelerate();
// beemer.break();
// benz.accelerate();
// benz.break();

////////////ES6 Classes 
//classes in Javascript aren't like the classes in Java or C++ 
//classes are still functions, so you can have expressions or declarations

// //class expression
// const PersonCl = class {}

//class declaration - with this class keyword - can combine functions + constructor functions within the same class
//both will be prototypes of the class
class PersonClass {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //methods will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }
    //option 2 - can write it inside the class object because it allows it to.
    greet() {
        console.log(`hey ${this.firstName}`);
    }

    get age() {
        return 2025 - this.birthYear;
    }

    //when you set, you need a get. 
    set fullName(name) {
        if (name.includes()) {
            this.fullName = name;
        } else {
            alert(`${name} is not a full name.`)
        }
    }

    get fullName() {
        return this.fullName;
    }
    //static method
    static hi() {
        console.log('hiya');
        console.log(this);
    }
}
const jessica = new PersonClass('jessica', 1997) //new instance created. will run the constructor function in class declaration/expression
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// option 1 - write it outside of the class object 
PersonClass.prototype.greet = function () {
    console.log(`hey ${this.firstName}`);
};
jessica.greet();

/*
1. classes are not hoisted
2. classes are first-class citizens
3. classes are executed in strict mode
*/

///////////Setters and Getters Properties
//functions that set and get a value. on outside, they look like regular properties

const account = {
    owner: 'aaron',
    movements: [200, 540, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    //requires argument. 
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest); //writing the function in the class/object as a property, rather than as a function
account.latest = 50;
console.log(account);
console.log(account.movements)

/////////////Static Methods
// methods that are work on static objects/constructor functions and not on prototypes

Person.hey = function() {
    console.log('hi there!');
    console.log(this);
};
Person.hey();

PersonClass.hi();

//////////Object create- good for true class inheritance 
const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }  
}

const steve = Object.create(PersonProto);
console.log(steve);

steve.name = 'steve';
steve.birthYear = 2005;
steve.calcAge();

const sara = Object.create(PersonProto);
console.log(sara);
sara.init('Sara Wilson', 1999)
sara.calcAge();

////////////Coding Challenge #2
class carBuild {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    
    break () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
}

const ford = new carBuild('ford', 120);
console.log(ford);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.break();

ford.speedUS = 50;
console.log(ford.speedUS);
