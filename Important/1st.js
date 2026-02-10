const empID = {
    userName: "varun",
    userId: 290
}

empID.userName = "kartik" // always use assignment operator when uotside object {}
console.log(empID.userName)

myArr = [0, 1, 2, 3, 8, 9,]
console.log("A", myArr)

const myNewArr = myArr.slice(1,4) // doesn't change the original array and odesn't include the last value

console.log(myNewArr)
console.log("B",myArr)
let myNewArr2 = myArr.splice(1,4) // change the original array and includes the last value 
console.log(myNewArr2)
console.log("C", myArr)

const user ={
    username: "Varun",
    coursePrice: 2999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and course price is ${anyObject.coursePrice}`)
}

handleObject(user)       // here you are passing user as an argument in handleObject(anyObject)