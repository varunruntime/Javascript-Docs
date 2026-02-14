const myObjects = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// forin loop 
// we use myobejcts[key]

for (const key in myObjects) {
    console.log(`${key} shortcut is for ${myObjects[key]}`)
}

const programming = ["js","python", "java", "Cpp" ]

for (const key in programming) {
    console.log(key); // in forof it dumps the key or values whereas here it dumps indexes
}
for (const key in programming) {
    console.log(programming[key]);
}

// so when we talk about objects we use forin loop
// for arrays we will mostly use foreach loop 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")


// for (const key in map) {.  // map is not iterable in forin loop 
//     console.log(key)
    
// }


