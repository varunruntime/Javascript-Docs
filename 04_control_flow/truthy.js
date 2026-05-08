const userEmail = []

if (userEmail){
    console.log("Got user Email")
}else{
    console.log("don't have user email")
}

// falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 

// "0", 'False', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is Empty")
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) { // here now object.keys(emptyobj) becomes an array so  now we can perform the array properties to check whether the object is empty or not 
    console.log("Object is empty")
}