const express = require("express")
const { UserModel } = require("../Model/user.model")

const userRouter = express.Router()

const bcrypt = require("bcrypt")

const { blackList } = require("../blacklist")
const jwt = require("jsonwebtoken")
const { auth } = require("../Middleware/auth.middleware")
userRouter.get('/', async (req, res) => {
    try {
        const user = await UserModel.find()
        res.status(200).send(user)
    } catch (error) {

    }
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
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(pass, user.pass, function (err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign({ course: "Backend" }, "nawab", {
                        expiresIn: 60
                    })
                    const refreshToken = jwt.sign({ course: "Backend" }, "aslam", {
                        expiresIn: 180
                    })
                    res.status(200).json({ msg: "login succesfully", token, refreshToken })
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

//logout
userRouter.get("/logout", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]
    try {
        blackList.push(token)
        res.status(200).json({ msg: "user has loggedout" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = { userRouter }