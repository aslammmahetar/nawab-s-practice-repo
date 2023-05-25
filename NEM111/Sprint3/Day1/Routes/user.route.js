
const express = require("express")

const { UserModel } = require("../model/user.model")
const userRouter = express.Router()

//GET
userRouter.get("/", async (req, res) => {
    const query = req.query
    try {
        const users = await UserModel.find(query)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//POST
userRouter.post("/add", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).json({ msg: "User has been added to DB" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//PATCH ==> UPDATE
userRouter.patch("/update/:userId", async (req, res) => {
    const { userId } = req.params
    const payload = req.body
    try {
        await UserModel.findByIdAndUpdate({ _id: userId }, payload)
        res.status(200).json({ msg: "Updated" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

//DELETE
userRouter.delete("/delete/:userId", async (req, res) => {
    const { userId } = req.params
    try {
        await UserModel.findOneAndDelete({ _id: userId })
        res.status(200).json({ msg: "user deleted" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = { userRouter }