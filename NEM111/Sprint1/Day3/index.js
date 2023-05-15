const http = require("http")
const fs = require('fs')
const data = fs.readFileSync("./db.json", "utf-8")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello")
    } else if (req.url == "/users") {
        res.end(data)
    } else if (req.url == "/add/blogs" && req.method == "POST") {
        let str = ""
        req.on("data", (packet) => {
            str += packet
        })
        req.on("end", () => {
            console.log(str)
        })
        res.end("Addeeedd")
    }
})

server.listen(1234)