// Immediately Invoked Function Expression (IIFE)

/*
jo function immediately execute ho jaaye 
Global scope ke pollution se problem hoti hai kyi baar 
to jo bhi global scope ke variables hai ya jo bhi declaration hai 
uss polution ko hatane ke liye hmne iffe ka use kia
*/

// function chai(){
//     console.log(`DB connected`)
// }
// chai()

// with iife it can be written as
//(function definition)(fucntion call or execution)

(function chai(){
    console.log(`DB connected`)
})(); // semicolon is needed

// the fucntion is invoked immediately so it doesn't know when to stop the context
// that's why we add semicolon in the end 
// because if we don't end with semicolon it might throw error with the next function 

(function chai(){

// named iife
    console.log(`DB Connected`)
})();

(() => {
    // unnamed iife
    console.log(`DB COnnected TWo`)
})();

(
    (name) => {
        console.log(`DB Connected to ${name}`)
    }
)('varun');
