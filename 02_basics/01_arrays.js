// arrays 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["ironman", "superman", "batman"]

const myArr2 = new Array(1, 3, 4, 5)
// console.log(myArr[1])

const numbers = [1, 2, 3, 4] // used in console we get different types of pototypes

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9) // add the value in starting of array and shifts all the array
// myArr.shift() 

// console.log(myArr.includes(9)) // ans in true or false 
// console.log(myArr.indexOf(9)) // provides index

// const newArray = myArr.join() // converts the array into strings

// console.log(myArr)
// console.log(newArray)
// console.log(typeof newArray)

// Slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1,4) // won't include the last value 
 

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3) // splice changed the whole array this is the diff b/w spice and splice
                                // and it includes the last value 
console.log(myn2)
console.log("C", myArr) // gives the remaining elements of the array 



