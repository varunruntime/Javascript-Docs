// Promise
/*
Calling a promise is easy. defining your own promise is where things get hard 
A promise in javascript is an object that represents the eventual compleion(or failure) of an 
asynchronous operation and its resulting value. Promises are used to handle asynchronous operations 
more effectively than tradition callback functions, providing a cleaner and more manageable way to 
deal with code that executes asynchronously, such as api calls, file I/O, or timers.
*/

const { resolve } = require("node:dns");

// callback version : setTimeout(callback, 3000)
// Promisified version : setTimeoutPromisified(3000).then(callback)
// setTimeout is a global function 
// whearas setTimeoutPromisified is not a global function 

// using a function that returns a promise / calling a async promisified version 
// since setTimeoutPromisified is not a global function but down we have introduced it like the global function 

function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve, ms))
}

function callabck(){
    // console.log("Hi There")
}

// setTimeoutPromisified(3000).then(callabck)


/*
whoever designed promise is maybe like this 
    class Promise {
        constructor () {}
        
        then () {
        
        }

        catch() {
            
        }
    
    }
just like we have class Rectangle {
    area () {}
    }
*/

const fs = require("fs")
function callback(err, contents){
    if(err){
        // console.log("Error while reading the file")
    }else{
        // console.log(contents)
    }
    
}
fs.readFile("07_advanced/a.txt", "utf-8", callback)


//***************************************************************************************************** */

// Promisified version 

const ft = require ("fs")

function fsReadfilePromisified(filepath, encoding) {
    return new Promise ( (resolve, reject) => {
        fs.readFile(filepath, encoding, (err, data) => {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    } )
}

function callback(data){
    console.log(data)
}

function callbackErr(){
    console.log("Error while reading the file")
}

fsReadfilePromisified("07_advanced/a.txt", "utf-8")
    .then(callback) // if everything goes right call the callback fn and call the fn with right data
    .catch(callbackErr) // and vice versa 

