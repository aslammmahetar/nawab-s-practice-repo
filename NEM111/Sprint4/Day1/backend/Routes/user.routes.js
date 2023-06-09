const express = require("express")

const userRouter = express.Router()

const { UserModel } = require("../Model/user.model")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

require("dotenv").config()

userRouter.post("/register", async (req, res) => {
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.status(400).json({ err: err.message })
            } else {
                const user = new UserModel({ name, email, pass: hash })
                await user.save()
                res.status(200).json({ msg: "User has been registred", user: req.body })
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userId: user._id, user: user.name }, process.env.secret)
                    res.status(200).json({ msg: "Logged in successfully", token })
                } else {
                    res.status(400).json({ msg: err.message })
                }
            })
        } else {
            res.json({ msg: "user does not exist" })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = { userRouter }