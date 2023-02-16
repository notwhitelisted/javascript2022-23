//Exporting Module
console.log('exporting module');


//blocking code
// console.log('start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// console.log('finish fetching users');


//scope to current file. can only use them here.
const shippingCost = 10;
const cart = [];

/*
1. named exports:
-simpliest way of exporting module with keyword "export"

*/
export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`)
}


const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity, };

/*
2. default exports:
-export the function itself. not the variable
*/
export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`)
}

