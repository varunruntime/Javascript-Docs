// In Javascript , classes are a way to define blueprint for creating objects 

class Rectangle {
    constructor (width, height, color){ 
// The constructor’s job is to initialize (set up) the object when it is created.     
// A special method inside the class that is called when you create an instance(an object) of the class
// It's used to initialize the properties of the object      
        this.width = width
        this.height = height
        this.color = color
    }
    static whoami(){
        return "I am a rectangle"
    }

    area (){
        const areaOfRectangle = this.width * this. height
        return areaOfRectangle
    }
    perimeter (){
        const perimeterOfRectangle = 2 * (this.width + this.height)
        return perimeterOfRectangle
    }
    paint(){
        console.log(`Color of the rectangle is ${this.color}`)
    }
}

const rectangle1 = new Rectangle(10, 20, "black")
console.log(rectangle1.area())
console.log(rectangle1.perimeter())
rectangle1.paint()
console.log(Rectangle.whoami())

// Static methods are not attached to the internal objects they are directly called or attached
// through classes 
