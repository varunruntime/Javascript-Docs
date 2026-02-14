// JSON.parse converts the json strings to the javascripts objects 
// JSON.stringify converts the objects to the JSON strings

const user = '{"username": "Harkirat", "age": 24, "gender": "male"}'// in json it is strictly required to put keys in qoutes
const user1 = JSON.parse(user)
console.log(user1)

const finalUser = {
    userName: "Dora",
    age: 24,
    gender: 'female'
}

const newUser = JSON.stringify(finalUser)
console.log(newUser[4])
console.log(newUser)
