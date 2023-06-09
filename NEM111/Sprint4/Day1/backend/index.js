const express = require('express')

const app = express()

const port = process.env.port

const { connection } = require("./db")

const { userRouter } = require('./Routes/user.routes')

const { noteRouter } = require("./Routes/notes.rout")

const cors = require("cors")
app.use(express.json())

app.use(cors())

app.use("/users", userRouter)
app.use("/notes", noteRouter)
app.listen(port, async () => {
    try {
        await connection
        console.log(`running at ${port}`, "and connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
})