const myNums = [1, 2, 3, 4, 5, 6]

// const initialvalue = 0
// const myTotal = myNums.reduce( function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and currval: ${currentvalue}`)
//     return accumulator + currentvalue
// }, initialvalue)
// console.log(myTotal)

// accumultor takes the initialvalue = 0, currentvalue = values of the array 
// so it takes intitial value one time then add with current value here 1
// now the accumulator = 1 and current value = 2 and the process will continues

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0 )
console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'Js Course',
        price: 2999
    },
    {
        itemName: 'py Course',
        price: 999
    },
    {
        itemName: 'mobile dev Course',
        price: 5999
    },
    {
        itemName: 'Data science Course',
        price: 1999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay)
