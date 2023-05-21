const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page")
})

//CREATE == POST
app.post("/add/users", (req, res) => {
    //reading
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    //add
    data.users.push(req.body)
    //write again whole data
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("new user added")
})
app.post("/add/posts", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.posts.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("new post is added")
})


//Read == GET
app.get("/users", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", 'utf-8'))
    res.send(data.users)
})
app.get("/posts", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    res.send(data.posts)
})

//streaming 
app.get("/streaming", (req, res) => {
    let users = []
    fs.createReadStream("./db.json")
        .on("data", (dataChunk) => {
            const parsedChunks = JSON.parse(dataChunk)
            users = users.concat(parsedChunks.users)
        })
        .on("end", () => {
            res.send(users)
        })
})


//Update == PATCH
app.patch("/update/users", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.users.filter((el, ind) => {
        el.name == "Aslam" ? el.age = 12 : el
    })
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("updated")
})

//DELETE 
app.delete("/delete/users", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.users.filter((el, ind) => {
        el.name !== "Saad"
    })
    console.log(data)
    res.send("deleted")
})

app.listen(1112, () => {
    console.log("Running at 1112")
})