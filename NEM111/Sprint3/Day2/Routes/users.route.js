const { UserModel } = require("../Models/users.model")
const express = require('express')
const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        const users = await UserModel.find(query)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ msg: "something gone wrong" })
    }
})

userRouter.post("/add/post", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).json({ msg: "Data added to Db" })
    } catch (error) {
        res.status(400).json({ msg: "Something goes worong" })
    }
})

userRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    const payload = req.body
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, payload)
        res.status(200).json({ msg: "Updated" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

userRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.findOneAndDelete({ _id: id })
        res.status(200).json({ msg: "Successfully deleted" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = { userRouter }