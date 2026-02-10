// if 


// const isUserLogeedIn = true
// const temperature = 28

// if (temperature === 28){
//     console.log("Temperature is less than 50")
// }else {
//     "Temperature is more than 50"
// }
// console.log("Executed")

// <, >, <=, >=, ==, !=, ===, !===

// const score = 200

// if (score > 100){
//     let power = 'fly'
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`);

const balance = 1000
if(balance < 500) console.log('Test'), console.log("Test2");
// here there is a implicit scope also don't put comma and write multiple line 
// it is a bad practice 

// if (balance < 500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// } else{
//     console.log("Less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInfromGoogle = false
const userLoggedInfromEmail = true 

if (userLoggedIn && debitCard){
    console.log("ALLOWED TO BUY COURSES")
}

if (userLoggedInfromEmail || userLoggedInfromGoogle){
    console.log("User logged in")
}
  

// Nullish Coalescing Operator (??): null undefined 

let val1
// val1 = 5 ?? 10 // ans = 5
// val1 = null ?? 10 // ans = 10
// val1 = undefined ?? 15 // ans = 15
val1 = null ?? 10 ?? 15 
console.log(val1)


// Terniary Operator // (Both Null coalescing operator and terniary operator are completely different)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : ("moree than 80")