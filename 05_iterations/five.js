const coding = ["js", "ruby", "java", "rust", "python", "cpp"]

// coding.forEach()
// A function that accepts up to three arguments. forEach calls the callback
// function one time for each element in the array.
// Performs the specified action for each element in an array.

// coding.forEach( function name() {
//  }
// )
// "just for understanding purpose" function callback means remove the word name from there 
// and in parenthesis() add any variable it will automatically take arrays value as 
// parameters and now in braces{} define what you want to do with them 

// coding.forEach( function (val){
//     console.log(val);
// } )

// we can do this with arrow function as well

// coding.forEach( (item) => {
//     console.log(item)
// } )

// another way 

function printme(item){
    console.log(item)
}

coding.forEach(printme) // here we just giving reference of the function don't need
                        // to execute them like { coding.forEach(printme()) }


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);

} )

// very imp when array have objects as values

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )

// this is very imp when we get arrays from database and array contains objects as 
// values with this method we can access it very easily  