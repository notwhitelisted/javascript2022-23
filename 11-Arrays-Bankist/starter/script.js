'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//function displayMovements
const displayMovements = function(movements, sort = false) {
  //resets container
  containerMovements.innerHTML = ''; 

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(currentValue, index) {
    const type = currentValue > 0 ? 'deposit' : 'withdrawal';
    const htmlTemp = 
    `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} - ${type}</div>
      <div class="movements__value">${currentValue}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlTemp);
  })
}
displayMovements(account1.movements)

//function calcDisplayBalance
const calcDisplayBalance = function (accumulator) {
  accumulator.balance = accumulator.movements.reduce((accumulator, current) => accumulator + current, 0);
  labelBalance.textContent = `${accumulator.balance}€`;
}
calcDisplayBalance(account1.movements);

//function calcDisplaySummary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100)
  .filter((int, i, arr) => {
    //console.log(arr);
    return int >= 1;
  })
  .reduce((acc, interest) => acc + interest, 0)
  labelSumInterest.textContent = `${interest}€`
}
calcDisplaySummary(account1.movements);

//function createUsername
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(function (name){
      return name[0];
    }).join(''); 
  })
  return accs
}
createUsername(accounts);

//function updateUI
const updateUI = function (acc) {
  //display movement
  displayMovements(acc.movements);
    
  //display balance
  calcDisplayBalance(acc);
  
  //display summary
  calcDisplaySummary(acc);
}

//Event Handling
let currentAccount;

//login button
//this button in form element - will refresh out with 'event' parameter
btnLogin.addEventListener('click', function(event) {
  event.preventDefault(); //prevents form from submitting
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //updateUI
    updateUI(currentAccount);
  }
})

//transfer button
btnTransfer.addEventListener('click', function(event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  //console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

  //update UI
  updateUI(currentAccount);
  }
})

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement 
    currentAccount.movements.push(amount);
    
    //update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  inputCloseUsername.value = inputClosePin.value = '';

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    //delete account
    accounts.splice(index, 1); 

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method - returns new array with extracted parts 
// console.log(arr.slice(2));
// console.log(arr.slice(2,4)); 
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

//for full extracted copies - can use either spread operators/slice method
// console.log(arr.slice());
// console.log([...arr]);

//splice method - changes original array
//console.log(arr.splice(2)); //shows what it took out
// arr.splice(-1);
// console.log(arr) //original loses 
// arr.splice(1,2);
// console.log(arr);

//reverse method - reverses the array and changes the original 
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// const arr3 = ['h', 'i', 'j', 'k', 'l'];
// console.log(arr3.reverse());
// console.log(arr3);

//concat - concates 2 arrays together. doesn't mutate original
// const letters = arr2.concat(arr3);
// console.log(letters);
// console.log([...arr2, ...arr2]); //spreading doesn't mutate original 

//join - 
// console.log(letters.join(' - '));

//at - figures out the value at an index
// const arr4 = [23, 11, 64];
// console.log(arr4[0]);
// console.log(arr4.at(0)); //at position 0

// console.log(arr4[arr4.length - 1]); //subtract 1 from length of array to get last element of array
// console.log(arr4.slice(-1)); //copy of array with last value 
// console.log(arr4.slice(-1)[0]);
// console.log(arr4.at(-1));

// console.log('aaron'.at(0));
// console.log('aaron'.at(-1));

/////////////Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of loop
// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {  
// if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------------------------------------------------')
//forEach method - higherorder function which requires callback fn to tell it what to do
// movements.forEach(function(movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// })

//cannot break out of forEach loop, 
//continue/break statements work on for of statemeents


/////////////////////Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function(currentValue, key, map){
//   console.log(`${key}: ${currentValue}`);
// });

////////////////////Set
//set - doesn't have keys + no indexes 
// const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur'])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(currentValue, key, map){
//   console.log(`${key}: ${currentValue}`);
// })

///////////////////////
//Map, Filter, Reduce Methods Overview
//1. Map - similar to forEach method, but can alter original array
//and place it in a new array. (maps original array to new array)
//2. Filter - filter for elements in original array that satisfies
//a certain condition. gets placed into a new array
//3. Reduce - reduces all array elements down to one single value (adding all elements together)
//has accumulator value --> reduces array while adding to accumulator value
//'snowball effect'. + no new array, just reduced value

/////////Map method
//functional programming with JS
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function(movement){
//   return movement * eurToUsd;
//   //return 23;
// })
// console.log(movements)
// console.log(movementsUSD);

//for of loop
//looping over array and pushing it to new array
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor); 

// const movementsDescriptions = movements.map((movement, i, arr) => {
//   if (movement > 0) {
//     return (`movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     return (`movement ${i+1}: you withdrew ${Math.abs(movement)}`);
//   }
// });
// console.log(movementsDescriptions);

/////////Filter method
// const deposits = movements.filter(function (movement) {
//   return movement > 0;
// });
//console.log(movements);
// console.log(deposits);

//for of loop
// const depositFor = [];
// for (const movement of movements) {
//   if (movement > 0) {
//     depositFor.push(movement);
//   }
// }
// console.log(depositFor);

// const withdrawals = movements.filter(function (movement) {
//   return movement < 0;
// });
// console.log(withdrawals);

// const withdrawalFor = [];
// for (const withdrawal of withdrawals) {
//   if (withdrawal < 0) {
//     withdrawalFor.push(withdrawal);
//   }
// }
// console.log(withdrawalFor);

//////////reduce method
//accumulator is like a snowball. 
// const balance = movements.reduce(function(accumulator, current, index, array) {
//   console.log(`iteration ${index}: ${accumulator}`);
//   return accumulator + current;
// }, 0);
// console.log(balance);

//for of loop
// let balanceFor = 0;
// for (const movement of movements) sum += movement;
// console.log(balanceFor);

//maximum value
// const max = movements.reduce((accumulator, current) => {
//   if (accumulator > current) {
//     return accumulator;
//   } else {
//     return current;
//   }
// }, movements[0]);
// console.log(max); //3000 is max

///////////////////Chaining Method
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(movement => movement > 0)
// .map(movement => movement * eurToUsd)
// .reduce((accumulator, current) => accumulator + current, 0);
// console.log(totalDepositsUSD);

//////////////////Find Method - retrieve 1 element from array based on condition
//will not return new array. will return first element that satisfies condition
// const firstWithdrawal = movements.find(index => index < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

console.log(movements);

//checks for equality
console.log(movements.includes(-130));

//some method - checks for condition (boolean);
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every method - only returns true if ALL elements in array satisfy condition
console.log(movements.every(mov => mov > 0)); //false
console.log(account4.movements.every(mov => mov > 0)); //true 

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false 
console.log(movements.filter(deposit));

//flat method - new array. all elments are concatenated
const arr = [[1, 2, 3], [4, 5, 6], 7 ,8];
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1,2], 3], [4, [5,6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); //17840

//flatMap
const accountMovements2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); //17840

//sorting arrays method
const owners = ['aaron', 'zach', 'nathan', 'peter'];
console.log(owners.sort()); //aaron, nathan, peter, zach - mutates og array

console.log(movements);
//console.log(movements.sort()); //-130, -400, -650, 1300, 200, 3000, 450, 70
//sorting method sort based on strings 

//return < 0, A, B
//else return > 0, B, A
console.log(movements.sort((a, b) => {
  if (a > b) {
    return 1; //# doesn't matter as long > 0.
  } 
  if (b > a) {
    return -1; //return something negative 
  }
}))
//-650, -400, -130, 70, 200, 450, 1300, 3000

//arrays - filling and creating arrays
const arrayyy = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
console.log(x); //array with 7 empty elements
console.log(x.map(() => 5));

x.fill(1) //fills entire array with 7 elements of 1 + mutates entire array
console.log(x);

x.fill(1, 3, 5) //splices from 3 to 5, but not including 5 and replaces with 1
arr.fill(23, 2, 6) //splices from 2 to 6, but not including 6 and replaces with 23

//from method
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from ({length: 7}, (current, index) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements_value')];
});









/////////////////////Coding Challenge #1

// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8 ,3 ];

// const juliaDataUpdated = juliaData.splice(0, 1);
// juliaData.splice(-2);
// const combinedData = juliaData.concat(kateData);

// const doggyFunc = function(currentValue, index, array) {
//   if (currentValue >= 3) {
//     console.log(`Dog number ${index + 1} is an adult and is ${currentValue} years old.`)
//   } else if (currentValue < 3) {
//     console.log(`Dog number ${index + 1} is still a puppy.`);
//   }
// };

// juliaData.forEach(function(currentValue, index, array) {
//   if (currentValue >= 3) {
//     console.log(`Dog number ${index + 1} is an adult and is ${currentValue} years old.`)
//   } else if (currentValue < 3) {
//     console.log(`Dog number ${index + 1} is still a puppy.`);
//   }
// })

// juliaData.forEach(doggyFunc);
// console.log('------------------')
// kateData.forEach(doggyFunc);
// console.log('------------------')
// combinedData.forEach(doggyFunc);

////////////////////Coding Challenge #2


////////////////////Coding Challenge #3


////////////////////Coding Challenge #4