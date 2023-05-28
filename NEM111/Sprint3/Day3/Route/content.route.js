const express = require("express")
const contentRouter = express.Router()
const jwt = require("jsonwebtoken")
const { auth } = require("../Middleware/auth.middleware")


//about / open route
contentRouter.get("/about", (req, res) => {
    try {
        res.status(200).json({ msg: "This is the Content about page" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})


//movies route
contentRouter.get("/movie", auth, (req, res) => {
    // console.log(token)
    try {
        res.status(200).json({ msg: "This is your movies" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})


//series route
contentRouter.get("/series", auth, (req, res) => {
    try {
        res.status(200).json({ msg: "This is your series" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

module.exports = { contentRouter }

