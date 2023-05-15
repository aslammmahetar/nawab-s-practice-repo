const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.end("Home Page")
})
app.post("/add/blog", (req, res) => {
    console.log(req.body)
    res.end("adddeedd")
})

app.listen(7897, () => {
    console.log("started")
})