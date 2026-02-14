// In Javascript , classes are a way to define blueprint for creating objects 

class Rectangle {
    constructor (width, height, color){ 
// The constructor’s job is to initialize (set up) the object when it is created.        
        this.width = width
        this.height = height
        this.color = color
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