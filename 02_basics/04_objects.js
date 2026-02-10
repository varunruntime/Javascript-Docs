// +++++++++++++++++++++++++++ objects - constructor ++++++++++++++++++++++++++++++++

// const tinderUser = new Object() // a singleton object
const tinderUser = {} // not a singleton object, but both will give empty value 

tinderUser.id = "123ABC"
tinderUser.name = "varun"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// adding objects in objects

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "varun",
            lastname : "dev"
        }
    }

}
// console.log(regularuser.fullname.userfullname.firstname)

// how to merge objects 

const obj1 = {1: 'a', 2: 'b'} // can also be used in console to find the prototypes of the objects 
const obj2 = {3: 'c', 4: 'd'}
const obj4 = {5: 'c', 6: 'd'}

// const obj3 = {obj1, obj2} // wrong way to merge object

// const obj3 = Object.assign({},obj1, obj2, obj4) // have to store in new obj because it gives the return value 
// we also uses empty parentheses because all values be combined and we get the guranteed result 
// it is not compulsory to use this 
// it acts object.assign(target, source) // {} => target & ibj1, obj2, obj3 is source 

// but we actually use the spread operator more often 
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

// if we get the data from the database
// if there are many objects in array 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 4,
        email: "v@gmai.com"
    }
]

users[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // interesting point is that the datatype of output value is array 
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser)) // every key value pair is converted in array 
// entries is used very rarely 

// to find the object has the property or not

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// +++++++++++++++++++++++++++ Objects destructuring +++++++++++++++++++++++++++++++++

const course = {
    coursename: "JAvascript one shot",
    price: "1200",
    courseInstructor: "Hitesh"
}

// course.courseInstructor this is also correct but mostly programmers use below syntax

const {courseInstructor: instructor} = course
// console.log(courseInstructor) // gives the same value 
console.log(instructor) // gives the same value also 

// json => usually in lame term it is a object with no name it can be array with objects

// {
//     "name" = "varun",
//     "coursename" = "javascript",
//     "price" = "free"
// } 

// arrays with many objects 

// [
//     {

//     },
//     {

//     },
//     {

//     },
// ]
