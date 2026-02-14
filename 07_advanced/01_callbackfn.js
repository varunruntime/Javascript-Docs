function sum(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function doArithemtic(a, b, fn){
    return fn(a, b)
}
console.log(doArithemtic(8, 90, sum))

function sum (a, b){
    return a + b
}

function sub (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    return a/b
}

function calculate(a, b, arithmentic){
    return arithmentic(a,b)
}

const ans = calculate(6, 8, multiply)
console.log(ans)