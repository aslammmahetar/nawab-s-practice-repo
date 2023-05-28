const express = require('express')
const app = express()
app.use(express.json())
const { connection } = require("./db")
const { userRouter } = require("./Route/user.route")
const { contentRouter } = require("./Route/content.route")
require("dotenv").config()
app.use("/users", userRouter)
app.use("/content", contentRouter)

const jwt = require("jsonwebtoken")

app.get("/refreshToken", (req, res) => {
    const refreshToken = req.headers.authorization?.split(" ")[1]
    const decoded = jwt.verify(refreshToken, "aslam")
    if (decoded) {
        const token = jwt.sign({ course: "Backend" }, "nawab", {
            expiresIn: 60
        })
        res.send(token)
    } else {
        res.send("invalid refresh token")
    }
})

app.listen(process.env.port,
    async () => {
        try {
            await connection
            console.log(`app listening on port ${process.env.port}!`)
            console.log("Connected to the DB")
        } catch (error) {
            console.log(error)
        }
    }
)