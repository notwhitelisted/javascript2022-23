//Importing Module
// import { addToCart, totalPrice, totalQuantity, } from './shoppingCart.js';
// console.log('importing module');
// addToCart('bread', 5);
// console.log(totalPrice);
// console.log(totalQuantity);

console.log('importing module');
import * as ShoppingCart from './shoppingCart.js'

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js'
add('chips', 3);


///////////////Top-Level Await(ES2022)
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
// const data = await res.json();
// console.log(data);

/////before
/*
async function x() {

}
*/

// console.log('something');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await res.json();    
    console.log(data);

    return await { title: data.at(-1).title, text: data.at(-1).body }
};

const lastPost = getLastPost();
console.log(lastPost); //output: promise pending. data hasn't arrived.

//not clean.
// lastPost.then(last => console.log(last));

//top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);