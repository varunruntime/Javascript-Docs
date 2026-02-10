class Animal { // You are creating a class named Animal. A class is like a blueprint to create objects.
    constructor(name, legCount, sound){ // The constructor or attributes runs when you create a new object.
        this.name = name
        this.legCount = legCount
        this.sound = sound
    }
    static mytype() { // It is a static function , it is not associated with the object , it is associated with 
                      // class or blueprint itself 
        console.log("Animal")
    }
    speaks(){ // it is a method or function inside a class 
        console.log("hi there " + this.sound)
    }
}
console.log(Animal.mytype())

let cat = new Animal("cat", 4, "meow meow") // create a new object 
cat.speaks() // call function on object 

// Define class blueprint
// Create object using new
// Call method on that object