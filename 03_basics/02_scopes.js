
// var c = 200
let a = 300

// global scope - values provided in the global scope are available in the block scope
// block scope - values defined in the block scope are not available for global scope


// {} it is called scope when it comes with function if else etc,
// but in object the curly braces is not called scope because that is object declarartion 
 if(true){
    let a = 10
    const b = 20  // memory of these variables are alocated in this block scope 
    var c= 30     // if we use them outside the scope they will be undefined 
                  // which is good and true 
    // console.log("Inner:",a)
}                

// console.log(a) // undefined (understand for if)
// console.log(b) // undefined 
// console.log(c) // gives 30 which is problematic and give 30 even if we not write var 
                  // and only write c because the var 200 which is written in global scope
                  // is getting changed in the block scope that's why we not used var in nowdays

// console.log(a)


function one(){
    const username = "Varun"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) // not defined because you are accesing block scope variable outside the block scope
    two()
}
// one() // here after calling one() you are able to execute two() if two() is not called we won't get the output


if(true){
    const username = 'Hitesh'
    if(username === 'Hitesh'){
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website) // it is undefined same reason as above 
}
// console.log(username) // same reason as above 

// ++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(5))
console.log(addone(7)) // this is correct and the code will execute 

const addTwo = function addone(num){
    return num + 1
}
console.log(addTwo(5))

// both is the correct way to define function just second one is called expression
// in both output will execute without error

// what if 

// function addone(num){
//     return num + 1
// }


// console.log(addTwo(5)) // this is incorrect and will not give the output bcz
// Cannot access 'addTwo' before initialization

// const addTwo = function addone(num){
//     return num + 1
// }



