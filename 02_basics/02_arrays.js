const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["flash", "superman", "batman"]

// marvel_heroes.push(dc_heroes) // will push dc heroes in marvel heroes
// now the array have 4 element, the 4th elememt is itself the array 
// push can work in existing arrays
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]) // we can access the elementof 4th element like this 

// marvel_heroes.concat(dc_heroes) // it gives the smae result but it is wrong
// because concat works on new arrays 

// const allHeroes = marvel_heroes.concat(dc_heroes) // now it works fine 
// console.log(allHeroes)

// Another method 
// spread operator = take it as like if you throw kaanch glass 
// all the peices will spread so it works like that only 
// it can work for more than 2 array whereas concat only work for 2 arrays

// 
const my_new_heroes = [...marvel_heroes,...dc_heroes] 
// console.log(my_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// returns a new ray will all the sub array concated in it 
// bracket defines how much depth you require 1,2, or infinity 

// console.log(real_another_array)

console.log(Array.isArray("Hitesh")) // checks the given obj,string,elememt is array or not
console.log(Array.from("Hitesh")) // converts the objects, strings, elememts in array 
console.log(Array.from({name: "Varun"})) // Interesting 
// give empty string because not able to what to convert whether key or value 

const score1 = 200;
const score2 = 100;
const score3 = 310;

console.log(Array.of(score1, score2, score3)) // converts multiple variables in arrays 

// so the Array.is => checks whether array or not
//  Array.from => converts the strings, objects, variables in array
//  Array.of => converts multiple variables in array 
 
// converts them in int 
console.log(parseInt("34")) 
console.log(parseInt("34pxaxx"))
console.log(parseInt("3.14"))
// Similarly parseFloat is also there
