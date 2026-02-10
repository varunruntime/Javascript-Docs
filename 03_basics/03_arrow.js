const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`) // this refers to the variables in the current context
        console.log(this) // talks about the current context/ current values

    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
 
// console.log(this) // we get empty parenthesis because we are in the node enviornment 
// and here this refers to the empty object because there is no context in the global scope 
// but if we run this in browser we get window object becuase in browser the the global 
// object is the window object 


// function chai(){
//     console.log(this) // we get lot of properties when defined in function 
// }

// chai()

// function chai(){
//     let username = "Varun"
//     console.log(this.username) // we get undefined because we are not able to use this in fucntion here
// }

// chai()



// declare fucntion using arrow function 

// const chai = () => {
//     let username = "Hitesh"
//     console.log(this) // here we also get empty parenthesis
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// another way to do this 

// const addTWo = (num1, num2) =>  num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2) // most used in react  

// if we want to return object 
const addTwo = (num1, num2) => ({username: "Varun"})//it will also be wrapped in paranthesis

console.log(addTwo(4, 9))