// Datatypes in Javasscript are catogerized by call by value and call by reference

// When you pass or assign a variable in JavaScript:
// Call by value → a copy of the value is used
// Call by reference → a reference (address) to the same object is used

// Primitive Datatypes

// 7 types : String, Number, Boolean, undefined, symbol, Bigint

let bigNumber= 28334534738473974793470n
let tempID = null

let scoreID = Symbol('1234')
let empID = Symbol('1234')

empID = scoreID // false because although their value are same they will return different value 

// Reference(Non-Primitive)

// Arrays, Objects, Functions 

const heroes = ["Superman", "Batman", "Joker"]

let myObj = {
    firstName: "Varun",
    age: 22
}

const myFuntion = function(){
    console.log("Hello World")
}


console.log(typeof bigNumber) // bigint
console.log(typeof tempID) // object 
console.log(typeof heroes) // object 
console.log(typeof myFuntion) // function 

// *********************************************************************************

// There are three types of memory in javascript Stack and heap 

// Stack memorey is used for primitive and Heap emory is used for Non-primitive
// in stack memory when you declare variable you get the copy whereas in heap you get access to original 

let myChannelName = "VarunDev"
let anotherChannelName = myChannelName

anotherChannelName = "raunikRai"

console.log(myChannelName)
console.log(anotherChannelName)

// Somethinng different happens in non-primitive

let userOne = {
    email: "hitesh@gmail.com",
    upiID: "3074@ibl"
}

let userTwo = userOne

userTwo.email = "varun@google.com"

console.log(userOne.email)
console.log(userTwo.email)