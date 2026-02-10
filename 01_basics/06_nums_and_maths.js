const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length) // after converting to string now you can also use string methods

// console.log(balance.toFixed(2))// give precision value after decimal place till 2 places

const otherNumber = 27.94582
console.log(otherNumber.toPrecision(3)) // return string containig a number either in exponential or fixed pint notation 

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-In')) // provides comma according to IN standard

// ******************************* MATH ****************************************

// console.log(Math) // can see many properties or methods if done in console 

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))

// console.log(Math.ceil(4.4)) // takes the upper value in roundoff
// console.log(Math.floor(4.9)) // takes the lower value in roundoff

// console.log(Math.min(4, 9, 3, 0, 1)) // gives min value
// console.log(Math.max(1, 9, 7, 2, 8)) // gives max value 

console.log(Math.random()) // always gives value between 0 and 1

console.log((Math.random()*10 + 1)) // we added +1 because value can be 0.041 so to avoid 0 we added 1
console.log(Math.floor((Math.random()*10 + 1))) // floor will roundoff to the lowest value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // its a formula to get value between min and max