const myObjects = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// forin loop 
// we use myobejcts[key]

// therefore for iterating objects we use forin loops
// it is not only used in objects as well 

for (const key in myObjects) {
    console.log(`${key} shortcut is for ${myObjects[key]}`)
}
//myObjects[key] provides the values of the keys in the objects 

const programming = ["js","python", "java", "Cpp" ]

for (const key in programming) {
    console.log(key); // in forof it dumps the key or values whereas here it dumps indexes
}
for (const key in programming) {
    console.log(programming[key]);
}


// for (const key in map) {.  // map is not iterable in forin loop 
//     console.log(key)
    
// }


// so when we talk about objects we use forin loop
// for arrays we will mostly use forof, foreach loop 



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")





