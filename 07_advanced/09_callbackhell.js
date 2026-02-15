setTimeout(function () {
    console.log("hi")
    setTimeout( function () {
        console.log("Hello")
        setTimeout(function () {
            console.log("Hi there")
        }, 5000)
    }, 3000)
}, 1000)

// it 's called a call back hell 
// Alt solution (doesn't really have callback hell)

function step3Done (){
    console.log("hello there");
    setTimeout(step3Done, 5000)
}
function step2Done (){
    console.log("hello");
    setTimeout(step2Done, 3000)
}
function step1Done (){
    console.log("hello");
    setTimeout(step1Done, 1000)
}

// Promisifed version
setTimeoutPromisified(1000)
    .then(function (){
        console.log("hi")
        return setTimeoutPromisified(3000)
    }).then(function (){
        console.log("Hello")
        return setTimeoutPromisified(5000)
    }).then(function () {
        console.log("Hello there")
    })
