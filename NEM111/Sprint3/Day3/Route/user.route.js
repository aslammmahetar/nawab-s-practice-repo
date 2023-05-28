const express = require("express")
const { UserModel } = require("../Model/user.model")

const userRouter = express.Router()

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
userRouter.get('/', (req, res) => {
    res.send('Hello World!')
})



//registration
userRouter.post("/register", async (req, res) => {
    //
    const { name, age, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            // Store hash in your password DB.
            if (err) {
                res.send(400).json({ error: err.message })
            } else {
                const user = new UserModel({ name, age, email, pass: hash })
                await user.save()
            }
        });
        res.status(200).json({
            msg: "New user Added",
            entry: req.body
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
    //
})

//authentication
userRouter.post("/login", async (req, res) => {
    //
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email, })
        if (user) {
            bcrypt.compare(pass, user.pass, function (err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign({ course: "Backend" }, "nawab")
                    res.status(200).json({ msg: "login succesfully", token: token })
                } else {
                    res.status(200).json({ msg: "wrong credential" })
                }
            });
        } else {
            res.status(200).json({ msg: "user not found" })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
    //
})

module.exports = { userRouter }