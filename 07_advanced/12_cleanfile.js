const fs = require("fs")

function cleanfile(filepath){
    return new Promise (function (resolve , reject){
        fs.readFile(filepath, "utf-8", function(err, contents){
            if(err) {
                reject()
            } else {
                const trimmedContents = contents.trim()
                fs.writeFile(filepath, trimmedContents, function(err){
                    if (err){
                        reject()
                    } else {
                        resolve()
                    }
                })
            }
        })
    })
}

// Write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt), ({prefix}2.txt), ({prefix}3.txt)

function cleanManyFiles(prefix) {
    return new Promise (async function (resolve, reject) {
        try{
            await cleanfile("07_advanced/" + prefix + "1.txt")
            await cleanfile("07_advanced/" + prefix + "2.txt")
            await cleanfile("07_advanced/" + prefix + "3.txt")
            resolve ()
        } catch (e){
            reject ()
        }
        
    })
}

// much easier way to write the above function using async await 

// async function cleanManyFiles(prefix) {
//     await cleanfile("07_advanced/" + prefix + "1.txt")
//     await cleanfile("07_advanced/" + prefix + "2.txt")
//     await cleanfile("07_advanced/" + prefix + "3.txt")
// }


cleanManyFiles("a")
    .then (function (){
        console.log("all three files have been cleaned")
    })
    .catch (function (){
        console.log("Error while reading these 3 files")
    })

    // Promise can run parallely because due to asynchronous nature