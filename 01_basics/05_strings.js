const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('Hitesh-Hc') // new way to declare string 
// if done in console you will get key value pairs, lhs is key and rhs is value and 
// also get see some prototypes 

console.log(gameName[0])
console.log(gameName.__proto__); // you can also access protototype which you saw in console ^

console.log(gameName.length) // way to access properties or methods of prototype

console.log(gameName.toUpperCase()); // but the origijal value haven't changed

console.log(gameName.charAt(4)) // checks what is the character at the given index

console.log(gameName.indexOf('c')) // checks what is the index at given char

const newString = gameName.substring(0,4) // remember last number is not printed 

console.log(newString)

const anotherString = gameName.slice(-8, 4) // can give -ve number in slice but not in substring
// like substring it also not include last number 

// 0 1 2 3 4 5 6 7 8 
// H i t e s h - H c
//-9-8-7-6-5-4-3-2-1 => negative indexing 
console.log(anotherString)

const newStringOne = "       Hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim()) // removes the empty space // you also have trimstart and trim space

const url = "https://whycrazydeal/20%off.com"

// url.replace = ('what you want to replace' , 'from which you want to replace')
console.log(url.replace('20%', '-'))

console.log(url.includes('Hitesh')) // can ask if its is present in string or not 

console.log(gameName.split('-')) // .split => (separator, limit )