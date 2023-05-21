const fs = require("fs")

const logger = (req, res, next) => {
    fs.appendFileSync("./logs.txt", `\n API EndPoint: ${req.url} | Method : ${req.method} | TimeStamp : ${Date()}`)
    next()
}

module.exports = logger