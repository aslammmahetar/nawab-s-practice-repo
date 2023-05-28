const express = require("express")
const contentRouter = express.Router()
const jwt = require("jsonwebtoken")

contentRouter.get("/about", (req, res) => {
    try {
        res.status(200).json({ msg: "This is the Content about page" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

contentRouter.get("/movie", (req, res) => {
    const { token } = req.query
    try {
        jwt.verify(token, 'nawab', (err, decoded) => {
            if (decoded) {
                res.status(200).json({ msg: "This is your movies" })
            } else {
                res.status(200).json({ msg: "not authorize" })
            }
        });
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

contentRouter.get("/series", (req, res) => {
    const { token } = req.query
    try {
        jwt.verify(token, 'nawab', (err, decoded) => {
            if (decoded) {
                res.status(200).json({ msg: "This is your series" })
            } else {
                res.status(200).json({ msg: "not authorize" })
            }
        });
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

module.exports = { contentRouter }
