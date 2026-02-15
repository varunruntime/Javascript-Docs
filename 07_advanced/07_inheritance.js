// Inheritance in javascript classes allows one class to inherit properties and methods from another 
// class. This mechanism enables code reuse, making it easier to create new classes that are based on 
// existing on existing ones, without having to duplicate code.

// It basically means you have to create a parent class which have the properties which are being used
// again and again in the different classes. Here like this.color = color, paint() ......
// And to attach the class to parent class we write extends 

// class Rectangle {
//     constructor (width, height, color) {
//         this.width = width
//         this.height = height
//         this.color = color
//     }
//     area (){
//         const areaOfRectangle = this.width * this.height
//         return areaOfRectangle
//     }
//     perimeter (){
//         const areaOfPerimeter = 2 * (this.width + this.height)
//         return perimeterOfRectangle
//     }
//     paint(){
//         console.log("Paint of the rectangle is" + this.color)
//     }
// }

// class circle {
//     constructor (radius, color){
//         this.radius = radius
//         this.color = color
//     }
//     area (){
//         const areaOfCircle = 3.14 * this.radius * this.radius
//         return areaOfCircle
//     }
//     perimeter (){
//         const perimeterOfCircle = 2 * 3.14 + this.radius
//         return areaOfCircle
//     }
//     color(){
//         console.log("Paint of circle is" + this.paint)
//     }
// }

// class square {
//     constructor (side, color){
//         this.side = side
//         this.color = color
//     }
//     area (){
//         const areaOfSquare = this.square * this.square
//         return areaOfSquare
//     }
//     perimeter (){
//         const perimeterOfSquare = 4 * this.side
//     }
//     paint(){
//         console.log("Paint of the square is" + this.color)
//     }
// }


class Shape {
    constructor(color, depth) {
        this.color = color;
        this.depth = depth
    }

    paint() {
        console.log("Paint with color " + this.color)
    }
    volume(){
        return this.area() * this.depth
    }
    area(){
        throw new Error ('The area method must be implemented in the sub class')
// It means sub class will override the area if they have area method or if they don't they get this         
    }
}

class Rectangle extends Shape{
    constructor (width, height, depth, color) {
        super(color, depth) // to call the constructor of parent class with the right argument 
        this.width = width
        this.height = height
    }
    area (){
        const areaOfRectangle = this.width * this.height
        return areaOfRectangle
    }
    perimeter (){
        const perimeterOfRectangle = 2 * (this.width + this.height)
        return perimeterOfRectangle
    }
}

class Circle extends Shape{
    constructor (radius, depth, color){
    super(color, depth) // to call the constructor of parent class with the right argument 
    this.radius = radius
    }
    area (){
        const areaOfCircle = 3.14 * this.radius * this.radius
        return areaOfCircle
    }
    perimeter (){
        const perimeterOfCircle = 2 * 3.14 * this.radius
        return perimeterOfCircle
    }
}

class Square extends Shape{
    constructor (side, depth, color){
        super(color, depth) // to call the constructor of parent class with the right argument  
        this.side = side
    }
    area (){
        const areaOfSquare = this.side * this.side
        return areaOfSquare
    }
    perimeter (){
        const perimeterOfSquare = 4 * this.side
        return perimeterOfSquare
    }
}



const r1 = new Rectangle (200, 100, 30, "green") // here Rectangle is a class and we are definig a new object r1 in that class
const c2 = new Circle (34, 12, "red")
const s1 = new Square (10, 7, "Blue")

console.log(s1.volume())


function whoHasMoreArea(S1,S2){
    if(s1.volume() > c2.volume()){
        console.log("first shape has bigger area")
    }else {
        console.log("Second shape has more area")
    }
}

whoHasMoreArea(new Rectangle(10, 10, 10, "Red"), new Square(100, 20 , "green"))
