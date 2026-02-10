const myNumbers = [1, 2, 3, 4, 5, 6]

const myNums = myNumbers.map( (num) => num + 10 )
// console.log(myNums) 
// it works like .filter but if we say print which are true then it will return each 
// value whether it is true or not becuse of its feature 

// chaining myNumbers.map().map().filter()

const newNums = myNumbers
                        .map( (num) => num * 10 )
                        .map( (num) => num + 1 ) // it will get the value from the 
                                                 // previous iteration not the original 
                                                 // value from array
                        .filter( (num) => num >=30 )
console.log(newNums)