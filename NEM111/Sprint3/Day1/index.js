const express = require('express')
const app = express()
const port = 2306
const { connection } = require("./db")
const { userRouter } = require("./Routes/user.route")

app.use(express.json())

app.use("/users", userRouter)

//listing to port and connecting to DB
app.listen(port, async () => {
    try {
        await connection
        console.log(`app listening on port ${port}!`)
        console.log("Connnected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something gone wrong")
    }
})

module.exports = { app }