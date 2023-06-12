const express = require('express')
const { connection } = require('./db')
const { userRouter } = require('./Routes/User.routes')
const app = express()
const port = 2005


const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Learning Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:2005"
            }
        ]
    }
}

app.use(express.json())

app.use("/user", userRouter)

app.listen(port, async () => {
    try {
        await connection
        console.log(`Example app listening on port ${port} and connected to DB!`)
    } catch (error) {
        console.log(error);
    }
})