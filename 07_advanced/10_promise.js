/*
A promise in a Javascript is an object that represents the eventual result of an asynchronous 
operation - either a success(resolved) or a failure (rejected)

A promise is nothing but an object of this promise class 
let p = new Promise()

let p = new Promise ((resolve) => {
    resolve ("1")
    })

p.then((data) => {
    console.log("Promise resolved" + data)
    })    
    
It's commonly used for things like:
> Fetching data from an api 
> Reading Files
> Timers(setTimeout)
> Database Requests 
 */

/*
Promise States 

A promise has 3 states :

1. Pending -> The operation is still running 
2. Fullfiled(Resolved) -> The operation completed succesfully
3. Rejected -> The operation fail
once fullfilled or rejected, the promise is settled and cannot change state 
*/

// when you write a promise it expects function as a input 

// const p = new Promise ((resolve, reject) => resolve)
// console.log(p)

// create a promisified version of fs.readFile
// create a promisified version of setTimeout
// create a promisified version of fs.writeFile

// how to implement promisified version of fs.readFile 
// when someone says write the promisified version of this it need to return the promise 
const fs = require("fs")

function fsReadFilePromise(filename, encoding){ // it doesn't take callback as an input like previously
                                                // this is promise not callback 
// how to write promise 
    return new Promise(function(resolve, reject){  
        // the way promise works is you initialize a new object of the promise(refer defn above)
        // it takes function as an input which also takes  2 functional arguments resolve and reject as an input
        // and in this function you are supposed to write what you want to do in this 
        // asyn function(fsReadFilePromise = this function needs to do what -> it is supprt to
        // read the file in this encoding) and this logic is write inside this function (){} and it's the responsibility
        // of promise class to run or execute this function eventually and when it execiutes the function the Promise 
        // class only passes the ^(resolve and reject) arguments

        fs.readFile(filename, encoding, function(err,data){
            if(err){
                reject(err) // it will direct to the catch function // jo error ^err se aaya hai wo humne niche bhej dia catch ko 
            } else {
                resolve(data) // it will direct to the resolve function or call the resolve function 
                              // and no it's not equal to the then function same for reject 
            }     
        })
    })

}  
// this is how you call the prmosified version of fs.readFile
fsReadFilePromise("07_advanced/a.txt", "utf-8") //it's an asynchronous function
    .then(function(data){ // when it get's resolved
        console.log(data)
    })
    .catch(function(e){ // when it's get rejected 
        console.log("error while reading file")
    })

    function setTimeoutPromisified(delay){ // there is no error because generally there is no error in setTimeout
        return new Promise(function (resolve, reject){
            setTimeout(function (){
                resolve()
            }, 1000)
        })
    }

    // setTimeoutPromisified(1000) 
    //     .then(function(){
    //         console.log("Hello Swettie, how are you ?")
    //     })
    //     .close(function(){ // it will not run in setTimeout just for practice purpose 
    //         console.log("an error came")
    //     })
    //     .finally(function(){ // it will always run either after .then or .close no matter what 
    //         console.log("finall after either then or catch")
    //     })
      

        const fss = require("fs")

        function fssReadFilePromisified(FilePath, Encoding){
            return new Promise (function(resolve, reject){
                fss.readFile(FilePath,Encoding,function(err,data){
                    if(err){
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
            })
        }

// there are two syntax to call the promises one is that we have used in the above examples and 2nd one is below 
// let's assume that promise will never get reject 

// async function main() {
//     let file1Content = fssReadFilePromisified("07_advanced/a.txt", "utf-8")
//     let file2Content = fssReadFilePromisified("07_advanced/b.txt", "utf-8")
//     let file3Content = fssReadFilePromisified("07_advanced/c.txt", "utf-8")

//     console.log(file1Content)
//     console.log(file2Content)
//     console.log(file3Content)

// we will get Promise { <pending> } because here we are try to print fileContent without resolve
// so we need to resolve for that we will use async await syntax if we are calling a promisified 
// function or simply we can use .then 


// }

// main()

async function main() {
    let fileContent1 = await fssReadFilePromisified("07_advanced/a.txt", "utf-8")
// so it means when this promisified fucntion will resolve it will return content in fileContent1
    let fileContent2 = await fssReadFilePromisified("07_advanced/b.txt", "utf-8")
    let fileContent3 = await fssReadFilePromisified("07_advanced/c.txt", "utf-8")

    console.log(fileContent1)
    console.log(fileContent2)
    console.log(fileContent3)
    
}

main()
console.log("hi")
console.log("hello")

// it also a asynchronous way of doing it 
// it reads like synchronous code but it is asynchronous code
