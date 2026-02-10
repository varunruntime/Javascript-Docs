function sayMyname(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyname() // sayMyname => is a reference only but when we add parenthesis then execution starts

// function addTwonumbers(number1, number2){ // when we define functions the input we take is called parameters

//     console.log(number1 + number2) 
// }

// addTwonumbers(3, 7) // when we call the functions the value which are passed are called arguments 


// const result = addTwonumbers(3, 8) // beginners mistake 

// console.log("Result is: ", result) // we will get undefined, we need to add return the result



function addTwonumbers(number1, number2){ // when we define functions the input we take is called parameters

    // let result = number1 + number2
    // return result // after return you can't write code after that

    return number1 + number2
     
}

const result = addTwonumbers(3, 7)
// console.log("Result is: ", result)

function loginUserMessage(username){
    if(!username){ // only runs when we evaluate the situation for true
        // !username => username === undefined in javascript undefined = false
        // that's why we wrote !username we can also write that but it is mostly used  
        console.log("Please enter you name mf")
        return // thats why we use return because if true the next line code will not work 

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Varun"))
// console.log(loginUserMessage())  

// if we have to overwrite abvove situation of undefined we can also pass 
// some default values

function loginUserMessage(username = "Sam"){
    if(!username){ 
        // console.log("Please enter you name mf")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Varun"))
// console.log(loginUserMessage())  

// ***************************************************************************************

// case when we don't know how much products is going to add on shopping cart 

function calculateCartPrice(val1, val2, ...num1){ // Rest operator -> three dots allow to collect all them in the package 
    return num1
}
console.log(calculateCartPrice(200, 400, 300, 2000, 100, 600, 530))

const user = {
    username: "hitesh",
    price: 300
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}
// handleObject(user)
// we can directly pass the object as well
handleObject({
    username: "varun",
    price: 299
})

const newArray = [200,300,780]

// function returnSecondValue(anyArray){
//     console.log(`The second value of array is ${anyArray[1]}`)
// }

// returnSecondValue(newArray)

// another method

function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([100, 300, 400, 2000]))