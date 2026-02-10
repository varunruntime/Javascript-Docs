// console.log(2 > 1)
// console.log(3 == 4)
// console.log( 4!= 5)
// console.log(6 <= 1)


console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(null > 0) // false 
console.log(null == 0) // false 
console.log(null >= 0) // true 

console.log(undefined == 0) // false 
console.log(undefined > 0) // false 
console.log(undefined < 0) // false 


/*
The reason is that an equality check == and comparisons > < >= <= work differently 
Comparisons convert null to a number, treating as a 0.
That's why null >= 0 is true and null > 0 is false 
nul == 0 is false because null == undefined 
*/

// Strict check ===

console.log("2" == 2) // true 
console.log("2" === 2) // false because strict check also checks the datatype 

