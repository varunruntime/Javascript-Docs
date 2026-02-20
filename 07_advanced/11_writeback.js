// we have to read the data from the file and trim extra spaces and return to the file 

// Approach #1 (sync fn calls)
const fs = require("fs")

function cleanFileSync(filePath, cbfn){
    const contents = fs.readFileSync(filePath, "utf-8")
    const trimmedContents = contents.trim()
    fs.writeFileSync("07_advanced/a.txt", trimmedContents)
}

cleanFileSync("07_advanced/a.txt")

// Approach #2 (Callback based, async fn calls)
const fss = require("fs")
function cleanFile(FilePath, cb){
    fss.readFile(FilePath, "utf-8", function(err, contents){
        const trimmedContents1 = contents.trim()
        fss.writeFile("07_advanced/a.txt", trimmedContents1, function(){
            cb()
        })
    })
}

cleanFile("07_advanced/a.txt", function(){
    console.log("done cleaning the file")
})


// Approach #3 (promise based, no async await syntax)

function cleanfile(filepath){
    return new Promise (function (resolve , reject){
        fs.readFile(filepath, "utf-8", function(err, contents){
            if(err) {
                reject()
            } else {
                const trimmedContents2 = contents.trim()
                fs.writeFile("a.txt", trimmedContents2, function(err){
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

cleanfile("07_advanced/a.txt")
    .then(function(){
        console.log("File has been cleaned")
    })
    .catch(function(){
        console.log("error while cleaning file")
    })

    // Approach #4 (Promise based, does asyn await)

function cleanfile(filepath){
    return new Promise (function (resolve , reject){
        fs.readFile(filepath, "utf-8", function(err, contents){
            if(err) {
                reject()
            } else {
                const trimmedContents2 = contents.trim()
                fs.writeFile("a.txt", trimmedContents2, function(err){
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

async function main() {
    try{
        await cleanfile("07_advanced/a.txt")
        console.log("Done Cleaning the file")
    } catch (e) {
        console.log("Error while cleaning the file")
    }
    
}