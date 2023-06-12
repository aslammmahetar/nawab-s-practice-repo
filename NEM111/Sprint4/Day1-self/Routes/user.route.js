const express = require("express")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const { UserModel } = require("../Model/user.model")

const userRouter = express.Router()

userRouter.post("/register", (req, res) => {
    //
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.status(400).json({ err: err.message })
            } else {
                const user = UserModel({ name, email, pass: hash })
                await user.save()
            }
        })
        res.status(200).json({ msg: "User has been added to DB", user: req.body })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    //
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userID: user._id, userName: user.name }, "nawab")
                    res.status(200).json({ msg: "login successfully", token })
                } else {
                    res.status(400).json({ msg: "Wrong credentials" })
                }
            })
        } else {
            res.status(400).json({ msg: "User does not exist" })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = { userRouter }