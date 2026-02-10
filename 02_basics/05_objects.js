function objectMethods(obj){
    console.log("Original Object:", obj)

    let keys = Object.keys(obj)
    console.log("After Object.keys():", keys)

    let values = Object.values(obj)
    console.log("After Object.values():", values)

    let entries = Object.entries(obj)
    console.log("After Object.entries():", entries)

    let hasProp = Object.hasOwnProperty("age")
    console.log("After hasOwnProperty():", hasProp)

    let newObject = Object.assign({}, obj, { // this is the syntax 
        newproperty: "newvalue"
    })
    console.log("After Object.assign():", newObject)
}

const sampleObjects = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
objectMethods(sampleObjects)