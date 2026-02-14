// const coding = ["js", "ruby", "java", "rust", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// } )

// console.log(values) // we get undefined because forEach doesn't return any value
// what if we want to check the condition or if let's say we don't want to print ruby 
// but forEach prints each value so to encounter this problem we do this 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 5 ) // 4 types of arrow function () => {}, () => (), () => single line 
// so when we use filter where we get callback fucntion where each values get accesed 
// one time and then we have to give the conditon 
// this operation also happens in the forEach but it returns the value but forEach not

const newNums = myNums.filter( (num) => num > 5 )
// console.log(newNums)

const newNumss = myNums.filter( (num) => {
    return num > 5 // here we have to wrute written dues to curly braces we have explicitly tell it 
} )
// console.log(newNumss)

// but if we only want to use forEach
// just it is a tedious process you can use any method

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumber =[]

myNumber.forEach( (items) => {
    if(items > 4){
        newNumber.push(items)
    }
} )
// console.log(newNumber)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
// console.log(userBooks)

userBooks = books.filter( (bk) => {return bk.publish >= 2000} )
// console.log(userBooks)

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
} )
console.log(userBooks)


const arr = [1, 2, 3, 4, 5]

const ans = arr.filter( (n) => {
    if (n % 2 == 0){
        return true;
    }else {
        return false
    }
} )
console.log(ans)

const newarr = ["Harkirat", "Harman", "Aryan", "Varun", "Raunik", "Krish"]

const name = newarr.filter( (n) => {
    if(n.startsWith("H")){
        return true
    }else {
        return false
    }
} )
console.log(name)