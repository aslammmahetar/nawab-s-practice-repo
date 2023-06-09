const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        try {
            const decode = jwt.verify(token, process.env.secret)
            if (decode) {
                console.log(decode)
                req.body.userId = decode.userId
                req.body.user = decode.user
                next()
            } else {
                res.status(400).json({ msg: "Not authorized!!" })
            }
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    } else {
        res.status(400).json({ msg: "Please login!!" })
    }
}

module.exports = { auth }