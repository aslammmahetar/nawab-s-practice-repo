const express = require("express")
const { UserModel } = require("../Model/user.model")

const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json({ msg: "users are here", users })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
})

userRouter.post("/create", async (req, res) => {
    try {
        const newuser = new UserModel(req.body)
        await newuser.save()
        res.status(200).json({ msg: "user has been added", user: req.body })
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

userRouter.patch("/update/:id", async (req, res) => {
    // const 
})

userRouter.delete("/update/:id", async (req, res) => {
    // const 
})

module.exports = { userRouter }