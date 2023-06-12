const jwt = require("jsonwebtoken")

const auth = (req, res, go) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        try {
            const decoded = jwt.verify(token, "nawab")
            if (decoded) {
                console.log(decoded)
                go()
            } else {
                res.status(400).json({ msg: "Not authorized!!" })
            }
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    } else {
        res.status(400).json({ msg: "Please Login!!" })
    }
}