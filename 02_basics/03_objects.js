// objects can be declared as literal and as cosntructor 
//Singleton => forms when object is declared from constructor and not from literal
// object.create = declared as constructor 

// ++++++++++++++++++++++++++++++ objects - literals ++++++++++++++++++++++++++++++++

const mySYM = Symbol("key1") // we not used new Symbol() here because Symbol is not a constructor you must call it without new

const jsUser = { // this is how object is declared as literal 
     name: "varun",
     "full name": "varun dev",
     // mySYM: "key1" // not a correct to add above symbol
     [mySYM]: "key1", // correct way to add if we want to use symbol in objects 
     age: 18,
     location: "Jaipur",
     email: "varun@google.com",
     isLoggedIn: false,
     lastLoggedinDays: ["monday", "saturday"]
} 

// there are two ways to access object 

console.log(jsUser.name)
console.log(jsUser.email) // you can't access "full name" with this method
console.log(jsUser["email"]) // you can access "full name" with this method

// console.log(jsUser.mySYM) // it's working but the datatype is wrong so it's incorrect
// console.log(typeof jsUser.mySYM) // it is working as a string datatype 

console.log(jsUser[mySYM])// correct way 
console.log(typeof jsUser[mySYM]) // we get string bcz key1 is string in symbol datatype 

jsUser.email = "varun@chatgpt.com" // hard way to override the value 
// Object.freeze(jsUser) // freezes the value in the object

jsUser.email = "varun@microsoft.com" // value won't change bacuse of above freeze
console.log(jsUser)

// we can also add fucntion in object and it is treated as variable 

jsUser.greetings = function(){
    console.log("hello user")
}

jsUser.greetings2 = function(){
    console.log(`hello user, ${this.name}`) // if we want to reference the name in the object
}                                       // if we want to reference the same oject we use 'this'
// on applying this we get all the properties inside the object 
// console.log(jsUser.greetings) // function[anonmyous] => funtion not executed we get the reference of the funtion 
console.log(jsUser.greetings())// gives error that it is not function 
// above we used oject.freeze . add comment on it then it won't be a problem
console.log(jsUser.greetings2())

