const express = require('express')
const { connection } = require('./db')
const { userRouter } = require('./Routes/user.route')
const { noteRouter } = require('./Routes/notes.route')
const app = express()
const port = 9112
app.use(express.json())
app.use("/user", userRouter)
app.use("/notes", noteRouter)


app.listen(port, async () => {
    try {
        await connection
        console.log(`Example app listening on port ${port}!, and connected to DB`)
    } catch (error) {
        console.log(error)
        console.log('Something gone wrong')
    }
})