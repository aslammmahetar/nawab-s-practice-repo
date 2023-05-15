const http = require("http")

const fs = require("fs")
const data = fs.readFileSync("./db.json", "utf-8")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.setHeader("Content-type", "text/html")
        res.end("<h1>this is a home page</h1>")
    } else if (req.url == "/ding") {
        res.end("ding page")
    } else if (req.url == "/users") {
        try {
            res.end(data)
        } catch (error) {
            res.end(error)
        }
    } else {
        res.end("invalid ding")
    }
})

server.listen(2500, () => {
    console.log("ding ding ding")
})