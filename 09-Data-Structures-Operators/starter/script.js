'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    //console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    //console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  }
}
//calling in the method function - orderDelivery() 
//which contains an object of options
// restaurant.orderDelivery({
//   time: '10:30PM',
//   address: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

//Destructuring objects - by variables naming
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

//Another way of destructuring objects - by renaming
// const {name: restaurantName, openingHours: hours, categories: tag} = restaurant;
// console.log(restaurantName, hours, tag);

//setting default values - good for pulling data from API.
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

//mutating variables
// let a = 111;
// let b = 999;
// const obj = {a : 23, b: 7, c: 14};
// ({a, b} = obj); //destructuring assignment wrapped in parenthesis
//helped with reassigning
// console.log(a, b);

//nested objects
// const {sat} = openingHours;
// console.log(sat);
// const {fri} = openingHours;
// console.log(fri);

//really destructuring an object down 
// const {fri: {open, close}} = openingHours;
// console.log(open, close);


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c= arr[2];

// const [x, y, z] = arr; //[x, y, z] = destructuring assignment
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.group(main, secondary);

// //Method 1 - switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp; 
// //console.log(main, secondary);

// //Destructuring Method
// [main, secondary] = [secondary, main] 
// console.log(main, secondary);

// //Receive 2 return values from a function. 
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// //Destructuring within destructuring;
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// //default values:
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//spread operator - similar to destructuring 
//helps get elements out of arrays 
// const arr2 = [7, 8, 9];
// const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr2]; //spread operator: ... 
// console.log(newArr);

//prints out all the elements here
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arrays or more
// const menuCopy = [...mainMenuCopy, ...newMenu];
// const menuCopy2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuCopy);
// console.log(menuCopy2);

//spread operator on string
// const str = 'aaron';
// const letters = [...str, ' ', 'S.'];
//makes 
// console.log(letters);
//get individual elements
// console.log(...str);

//real world example
// const ingredients = [
//   prompt('ingredient1'),
//   prompt('ingredient2'),
//   prompt('ingredient3'),
// ];
// console.log(ingredients);

//orderPasta function
// restaurant.orderPasta(...ingredients);

////////Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name)
// console.log(restaurant.name);


////////Rest Operator - on left side of assignment operator
//Destructuring with Rest 1.
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// console.log(...others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, ...otherFood);
// console.log(otherFood); //collected into array

// //Collecting into Object - not array. 2.
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //2. Functions - Rest Operator with Rest Parameters 
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// }
// add(2, 3) //placed into array
// add(5, 3, 7, 2) //placed into array
// add(8, 2, 5, 3, 1, 2, 4) //placed into array

//spread --> but gets placed into add function where it is rest parameters
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives');
// restaurant.orderPizza('pepperoni');

//Short Circuiting (&& and ||)
//use any data type, return any data type
//short circuiting - if first value is true, will return that value
 
//OR operator
// console.log(3 || 'aaron');
//  console.log(" " || 'aaron');
//  console.log(true || 0);
//  console.log(undefined || null);
//  console.log(undefined || 0 || "" || 'hello' || 23 || null);

// const guests11 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests11);

// const guests2 = restaurant.numGuests || 15
// console.log(guests2)

// //AND operator - returns falsy value when first value is falsy
// console.log(0 && 'aaron');
// console.log(7 && 'aaron'); //when all values truthy, last value will be returned
// console.log('hello' && 23 && null && 'aaron'); //outputs null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'cheese');

//nullish coalescing operator (??) - picks out null or undefined values

//Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
}

//OR operatior
// rest1.numGuests = rest1.numGuests || 15;
// rest1.numGuests = rest1.numGuests || 15;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 12;
// console.log(rest1);
// console.log(rest2);

//nullish operator
// rest1.numGuests ??= 12;
// rest2.numGuests ??= 12;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. 
//const [players1, players2] = game.players;
//console.log(players1, players2);

//2. 
//const [gk, ...fieldPlayers] = players1; 
//console.log(gk, fieldPlayers);

//3. 
//const allPlayers = [...players1, ...players2]
//console.log(allPlayers);

//4. 
//const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5. 
//const {odds: {team1, x: draw, team2}} = game;
//console.log(team1, draw, team2);

//6. 
//const printGoals = function(...players) {
  //console.log(`${players.length} goals were scored.`);
//}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

//7. 
//team1 < team2 && console.log('team 1 is more likely to win');

///////////////////////////////
//Looping Arrays: The for-of-loop
//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for (const item of menu) //console.log(item);

//for (const [i, el] of menu.entries()) {
  //console.log(`${i + 1}: ${el}`);
//}

//Enhannced Object Literals


////////Looping Objects: Object Keys, Values, and Entries
////////Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = (`We are open on ${properties.length} days`);
// for (const day of Object.keys(properties)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

///////Property Values
// const values = Object.values(openingHours);
// console.log(values);

///////Entire Object
// const entries = OBject.entries(openingHours);
//console.log(entries);

///////[key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/////////Coding Challenge #2
//1.
for (const [goals, players] of game.scored.entries()) {
  console.log(`Goal ${goals + 1}: ${players}`);
}
//2.
let average = 0;
const odds = Object.values(game.odds)
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`)
}

////////Sets - canont duplicate. 
const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
console.log(ordersSet); 
console.log(new Set ('Jonas'));

console.log(ordersSet.size); //3
console.log(ordersSet.has('pizza')); //true
console.log(ordersSet.has('bread')); //false
ordersSet.add('garlic bread');
ordersSet.add('garlic bread'); //added to set
ordersSet.delete('risotto'); //deleted from set 
console.log(ordersSet);

//sets are iterable. can be looped over
for (const order of ordersSet) console.log(order); //pasta pizza garlic bread

//example: 
//array
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//set
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //3 length - b/c spread operator 
const staffUnique2 = [new Set(staff)];
console.log(staffUnique2); //1 length
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);

console.log(new Set('aarontang').size); //6 unique characters in this set

//use arrays over sets when you are storing something in order
//and duplicates + have a lot of methods to alter the array

//use sets over arrays because they're unique and very easy to interact
//by using their straight forward methods. not as important as arrays. 

////////Maps - map values to keys (data structure) 
const rest = new Map(); //empty map with no values
rest.set('keyname', 'innout'); //add new element to data structure
rest.set(1, 'covina, CA');
console.log(rest.set(2, 'west covina, CA'));

//can chain + add onto with .set + .set
rest.set('categories', ['burgers', 'shakes', 'fries']).set('open', 11).set('close', 24).set(true, 'we are open').set(false, 'we are closed');
console.log(rest.get('keyname'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('west covina, CA')); //undefined. can only retrieve data from
//keys. not values

const time = 12; 
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.size); //8
rest.set([1,2], 'test');
console.log(rest);
//can use objects as map keys with values. 

////////Iteration
const question = new Map([
  ['question', 'best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

//converting object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);

/////////Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
//3.
const time2 = [...gameEvents.keys()].pop();
//console.log(time2);
console.log(`An event happened, on average, every ${time2 / gameEvents.size} minutes`);
//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half} half ] ${min}: ${event}`);
}

////////////STRINGS
const airline = 'LAX';
const airline2 = 'TAP Air Portugal'
const plane = 'a320'
console.log(plane[0]); //a
console.log(plane[1]); //3
console.log('b737'[0]);//b 
console.log(airline.length); //3 
console.log('b737'.length); //4 
console.log(airline.indexOf('A')); //1 
console.log(airline.indexOf('LAX')); //0
console.log(airline.slice(2)); //X - .slice returns a new string
console.log(airline.slice(0,2)); //A - second parameter is not included

console.log(airline2.slice(0, airline2.indexOf(' '))); //TAP
console.log(airline2.slice(airline2.lastIndexOf(' ') + 1)); //Portugal
console.log(airline2.slice(-2));
console.log(airline2.slice(1, -1)); //cuts off first and last letter. AP Air Portuga

const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1); //counts one from the right
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
//calling a method on a string = changes a primitive string into object string where
//you can call different methods on it, e.g. slice
//when done, object is converted back to regular string primitive 

const airline3 = 'Air Canada';
console.log(airline3.toLowerCase());
console.log(airline3.toUpperCase());

//fixing passenger name;
const passenger = 'aarON taNg';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passenger.toUpperCase();
console.log(passenger[0].toUpperCase() + passengerLower.slice(1, passenger.indexOf(' ')));

//comparing emails
const email = 'hello@aaron.io';
const loginEmail = ' Hello@Aaron.Io \n';

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

//replacing strings
const priceGB = '288,97';
const priceUS = priceGB.replace(',', '.'); //returns new string
console.log(priceUS); //this new string gets console.logged and new results are shown

const announcement = 'all passengers come to boarding door 23. boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//regular expression - regex
console.log(announcement.replace(/door/g, 'gate'));

//booleans
const plane5 = 'A320neo';
console.log(plane5.includes('A320')); //true
console.log(plane5.includes('Boeing')); //false 

if (plane5.startsWith('A') && plane5.endsWith('neo')) {
  console.log('yes this exists.')
}

//practice exercise
const checkBagge = function(items) {
  const lowerCheckBaggage = items.toLowerCase();
  if (lowerCheckBaggage.includes('knife') || lowerCheckBaggage.includes('gun')) {
    console.log('you`re not allowed on the plane');
  } else {
    console.log('you may board');
  }
}

checkBagge('I have a laptop, some food and pocket knife');
checkBagge('Socks and camera');
checkBagge('Got some snacks and a gun for protection');

//split and join
console.log('a+very+nice+string'.split('+')); 
const [firstNombre, lastNombre] = 'Aaron Tang'.split(' ');

const newNombre = ['Mr.', firstNombre, lastNombre.toUpperCase()].join(' ')
console.log(newNombre);

const capitalizeNombre = function(name) {
  const nombre = name.split(' ');
  const nombreUpper = [];

  for (const n of nombre) {
    nombreUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nombreUpper.join(' '));
}
capitalizeNombre('jessica ann smith davis');
capitalizeNombre('aaron tang')

//padding a string - adds a number of characters to a string until string has desired length
const messengee = 'go to gate 23';
console.log(messengee.padStart(25, '+'));
console.log(messengee.padEnd(25, '-'));

const maskCreditCard = function(number) {
  const str = number + ''; 
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3712937198237198222));
console.log(maskCreditCard('1238972893712983123'));

//Repeat 
const textRepeat = 'bad weather... all departures are delayed';
console.log(textRepeat.repeat(5));

const planesWaiting = function(n) {
  console.log(`there are ${n} planes in line ${'plane'.repeat(n)}`);
};
planesWaiting(5);
planesWaiting(12);

//////////////////Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  //console.log(text);

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output.padEnd(20, ' '));
  }
});

///////////////String Methods Practice
const flight2 = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flight2.split('+')) {
  const [type, from, to, time] = (flight.split(';'));
  const output = `${type.replaceAll('_', ' ')} ${from.slice(0, 3).toUpperCase()} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);;
  console.log(output);
}