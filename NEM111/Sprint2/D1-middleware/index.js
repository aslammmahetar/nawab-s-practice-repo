const express = require("express")
const app = express()


app.use((req, res, next) => {
    req.url == "/about" ?
        next() :
        res.send("You dont have access to this route")
})

app.get("/", (req, res) => {
    console.log("Hello from home page")
    res.send("Home Page")
})

app.get("/about", (req, res) => {
    console.log("Hello from about page")
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    console.log("Contact from contact page")
    res.send("Contact page")
})

app.listen(1112, () => {
    console.log("Running at 1112")
})