// const arr = [10, 20, 30, 40, 50, 60, 70]

// arr.filter( (num) => {
//     if (num > 25) {
//         return num
//     } 
// } )

// const compare = ((num) => num > 25)
// compare(25)

// we have made our custom .filter prototype which we can run on any array 
// Array.prototype.filtering = function(compare){  
//     const ans = []
//     for (const num of this) {
//         if(compare(num)){ // here we are taking another function as a parameter
//             ans.push(num)
//         }
//     }
//     return ans;
// }

// const newArr = arr.filtering((num) => num > 45);
// console.log(newArr);

// const a = [1, 3, 4, 6, 8, 9, 5]
// const newA = a.filtering((num)=> num > 3)
// console.log(newA);
// but it's not prefered to this because it may clash with the original Arrays , if it have same name 



// const arr = [10, 20, 30, 40, 50, 60]
// const newarr = arr.map((num)=> {
//     return num * 3
// })
// console.log(newarr);

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];


// const newProduct = products.filter((prod)=> prod.price > 50).sort((a,b) => b.price-a.price)           
// console.log(newProduct)

// const newProduct = products.map((prod) => ({  // whenever take the object in the arrow function wrap them in the parenthesis
//     name: prod.name,
//     price: prod.price
// }))
// console.log(newProduct)


// custom made mapping function 
// products.mapping = function(input){
//     const ans = [];
//     for(const prod of this){
//         ans.push(input(prod))
//     }
//     return ans;
// }
// const newProduct = products.mapping((prod) => ({
//     name: prod.name,
//     price: prod.price
// }))
// console.log(newProduct)

const totalprice = products.reduce((acc, currval) => {
    if(currval.inStock){
        return acc + currval.price
    } else{
        return acc;
    }
},0)
// console.log(totalprice)

// Data Structures: Set 

// const arr = [10, 20, 30, 40, 50, 50, 40, 60, 70,]

// console.log(arr);

// const s1 = new Set(arr);
// s1.add(13);
// s1.delete(10);
// console.log(s1); // set operator returns the set object not an array 
// console.log(s1.size)

const email = ["ro@gmail","va@gmail","ka@gmail", "pr@gmail", "ar@gmail"]

const uniqueEmail = [...new Set(email)]; // the spread operator extract all values from the Set and puts them in the new array.
// console.log(uniqueEmail);

 // way to iterate the Set 
// const s2 = new Set(email);
// for (const num of s2) {
//      console.log(num)
// }

// Data Structures: Map

const m1 = new Map([
    ["Rohit", 40],
    [2, "rohit"],
    [true, 11],
    [[1,23,5456,43], "varun"]
])
console.log(m1)

for (const [keys, values] of m1) {
    console.log(keys,values)
} 