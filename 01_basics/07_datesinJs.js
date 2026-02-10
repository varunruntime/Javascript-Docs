// Dates 

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2025, 0, 20, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myNewDate = new Date("2027-12-30")
// console.log(myNewDate.toString())

// let myAnotherDate = new Date("07-23-2025")
// console.log(myAnotherDate.toString())

let myTimeStamp = Date.now // used to decide which user ans first in poll, used in ticket booking system 
// console.log(myTimeStamp()) // will give long value which is miliseconds from 1 january 1970

// console.log(myCreatedDate.getTime()) //will give long value which is miliseconds from 1 january 1970
// we used these to compare values between two date or time which is first 

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleString("Default", {
    weekday: 'long'
})