const jwt = require("jsonwebtoken")
const { blackList } = require("../blacklist")

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        if (blackList.includes(token)) {
            res.status(200).json({ msg: "Please login again!!" })
        }
        try {
            const decoded = jwt.verify(token, "nawab")
            if (decoded) {
                next()
            } else {
                res.status(200).json({ msg: "Token not recognize" })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    } else {
        res.json({ msg: "Please login" })
    }
}

module.exports = { auth }