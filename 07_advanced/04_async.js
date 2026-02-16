const fs = require("fs")

const contents = fs.readFileSync("07_advanced/a.txt", "utf-8") 
// console.log(contents)

/*
require("fs") loads a built-in Node.js module
fs stands for File System 

So this line means:
👉 “Give me the file system module so I can work with files.”

the variable fs contains many functions like: readFile,readFileSync,writeFile,appendFile

readFileSync → reads file synchronously
It means:
⛔ Stop everything.
📖 Read the file.
▶️ Then move to next line.

let's say it takes 10s to read the file and if i have written the synchronus(cpu bound code) code after this 
like for loop then it won't run until it read the file it's like
you have two washing machines and if you put clothes on one to dry you can't use another you have to
wait until the 1st machine dries you can't make them run simulataneously but to counter this we use 
functional arguments and to call the filer asynchronously   
*/

const fss = require ("fs")

function fileReadCallback(err, contents){
    // console.log(contents)
    // console.log(contents)
    // console.log(contents)
    // console.log(contents)
}

fss.readFile("07_advanced/a.txt", "utf-8", fileReadCallback)

// why you need callback because 
// let's say it takes 10s to read the file and if i have written the asynchronus code after this 
// like for loop then it will run the for loop the control then it need to reach above to execute 
// content . That's why for asyncnhronous code you definitely need the callback but you may not 
// need while writing promises 


let sum = 0
for(let i = 0; i <= 100; i++){
    sum += i
}
// console.log(sum)

/*
Now this fs.readFile is a asynchronous it means "Start reading file… but don’t wait.”
Node says:
Ok, I’ll start reading the file in background.
Meanwhile, I’ll continue executing the next lines.

also the err is written there because if there is no file there or file is to big to read or if 
anything goes wrong the readfile gives the err that what goes wrong or if everything goes right
the err becomes null and we get the contents 
we wrote err first (err, contents) not like this (contents, err) because it's just a pattern because 
whoever write the read file like the we check the error first callback pattern 
*/

/*
s will print first because js synchronous architecture works in a way that cpu bound task will 
run continouly so after completing the task the asynchronous callback will execute 
*/

let ctr = 0
function callback(){
    console.log(ctr)
    ctr = ctr + 1
}
setInterval(callback, 1000)

let x = 0
for (let i = 0; i < 4000000; i++){
    x = x + 1
}
console.log(x)
// it doesn't care if 1 callback or 2 or 3 callbacks are pile up it will first execute the 
// the cpu task then it will do asynchronous callback 
// so when for loop runs it doesn't care if 1 sec is passed do callback 
// therefore after running the loop completely then only it will go to callabck irrespective of
// how many seconds are passed

/*
setInterval is not actually handled by the JavaScript engine itself. 
JavaScript is single-threaded, meaning it has only one call stack and 
can execute only one piece of code at a time. When setInterval(callback, 1000) 
is called, the JavaScript engine registers the timer with the runtime environment 
(Web APIs in the browser or libuv in Node.js) and immediately continues executing 
the next lines of code without waiting. The timer runs outside the JavaScript call 
stack. After 1000 milliseconds, the callback is placed into the callback queue, 
but it does not execute immediately. The event loop constantly checks whether the 
call stack is empty. If the stack is busy (for example, running a heavy for loop), 
the callback must wait in the queue. Only when the synchronous code finishes and 
the call stack becomes empty does the event loop push the callback onto the stack 
for execution. Therefore, in the given code, the for loop and console.log(x) run 
first because they are synchronous and block the stack, and only after they complete 
does the setInterval callback start executing. This shows that timers do not interrupt 
or pause JavaScript execution; they simply schedule callbacks to run when the stack is free.
*/