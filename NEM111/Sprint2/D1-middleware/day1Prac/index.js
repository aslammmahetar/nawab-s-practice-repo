const express = require("express")
const app = express()
const timeLogger = require("./middleWare/timelogger.middleWare")
const logger = require("./middleWare/logger.middleWare")
const addStudentCode = require("./middleWare/addStudentCode.middleWare")
const fs = require("fs")
const cors = require("cors")

// app.use(logger
// specific task
// if (req.url === "/about"  /* end point */) {
//     next()
// } else {
//     res.end("you dont have access to this route")
// }
// console.log("Helllo from middleware")
// console.log("Byee from middleware")
// )
app.use(express.json())
app.use(cors())
app.get("/" /* end point */, (req, res) => {
    console.log("Hello from Home page")
    res.send("Home Page")
})

app.get("/contact" /* end point */, (req, res) => {
    console.log("Hello from contact page")
    res.send("Contact page")
})

app.get("/about" /* end point */, (req, res) => {
    console.log("Hello from about page")
    res.send("About page")
})

app.get("/data" /* end point */, (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    res.send(data)
})

app.use(addStudentCode)
app.post("/register", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.student.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    console.log(req.body)
    res.send("New Student has been added to DB, this student has cleared MSAT")
})

app.get("/search", (req, res) => {
    const { q, director } = (req.query)
    res.send(`${q} movie is directed by ${director}`)
})

app.get("/weather", (req, res) => {
    const { city } = req.query
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    const temp = data.cities[city]
    res.send(`it's ${temp} in ${city} India`)
})

app.get("/student/:id", (req, res) => {
    const { id } = req.params
    res.send(`This data is for roll no ${id} student`)
})

app.listen(2306, () => {
    console.log("Running at 2603")
})