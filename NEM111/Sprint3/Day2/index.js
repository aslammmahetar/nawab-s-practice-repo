const express = require('express')
const app = express()
const port = 1112
app.use(express.json())
const { connection } = require("./db")
const { userRouter } = require("./Routes/users.route")

app.use("/users", userRouter)

app.listen(port, async () => {
    try {
        await connection
        console.log(`Example app listening on port ${port}!`)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
})