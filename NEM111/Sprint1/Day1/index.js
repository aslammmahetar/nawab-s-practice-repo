const fs = require("fs")
fs.readFile("./lacture.txt", { encoding: "utf-8" }, (er, data) => {
    if (er) {
        console.log(er)
    } else {
        console.log(data)
    }
})

try {
    const data = fs.readFileSync("./lacture.txt", "utf-8")
    console.log(data)
} catch (error) {
    console.log(error)
}

// const write = fs.writeFile("./lacture.txt", "Nawab is here to learn backend", (er) => {
//     er ? console.log(er) : console.log("entered in the file")
// })

// try {
//     fs.writeFileSync("./lacture.txt", "nawab is hereeee")
// } catch (error) {
//     console.log(error)
// }

fs.appendFile("./lacture.txt", "\nsecond line", (err) => {
    err ? console.log(err) : console.log("added")
})