// setTimeout() is a not a part of javascript, it is a part of web apis

// setTimeout("hi") 
// setTimeout("console.log(true)")
// when executed in a browser, the String written in the parenthesis will take it as a code
// that's why setTimeout("hi") gives error and setTimeout("console.log(true)") prints true in the console

// Syntax of setTimeout(function, delay)

setTimeout( () => {  
    console.log("Varun Dev")
}, 4000 )


setInterval( () => {  
    console.log("Varun Dev")
}, 1000 ) 
// setInterval runs after every interval 


