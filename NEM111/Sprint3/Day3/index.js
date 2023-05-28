const express = require('express')
const app = express()
app.use(express.json())
const { connection } = require("./db")
const { userRouter } = require("./Route/user.route")
const { contentRouter } = require("./Route/content.route")
require("dotenv").config()
app.use("/users", userRouter)
app.use("/content", contentRouter)


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