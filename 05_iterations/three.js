// for of 

// ["", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {   // for (const element of object) { // here element is variable like i & 
                                    // here object doesn't means literal object it 
                                    // can be arrays, strings, objects etc
        
// }
for (const num of arr) { // its like for loop , do while loop just you don't have to use increment decrement here
    console.log(num);
    
}

const greetings = "Hello Worlds!"
for (const greet of greetings) {
    if(greet == ' '){
        continue
    }
    console.log(`Each char is ${greet}`)
    
}

// Map

// Map is an object . The Map object holds key-value pairs and remembers
// the original insertion order of the keys. Any values (both objects and primitive
// values) may be used as either a key or a value 
// there is no duplicate value here, the value is unique here

const short = new Map()
short.set('IN', "India")
short.set('USA', "United States of America")
short.set('Fr', "France")
short.set('IN', "India") // won't print the duplicate again
console.log(short);

for (const [val, val1] of short) {
    console.log(val, ':-', val1) // we can do this as well 
}

for (const [key, val] of short) {   // if we use key seperately it won't work like any variable here it will give keys only like we use in objects 
    console.log(key, ':-', val) // we can do this as well 
}

const myObject = {
    game1: "Mario",
    game2: "Supermario",
    game3: "Mini Militia",
    game4: "Subway Surfers"
}
// for (const [key, value] of myObject) { // this won't work in objects
                                          // objects is iterated with another way
//     console.log(key, ':-', value) 
// }