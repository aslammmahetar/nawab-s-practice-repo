const express = require("express")

const { NoteModel } = require('../Model/note.model')
const { auth } = require("../Middleware/auth.middleware")

const noteRouter = express.Router()

noteRouter.use(auth)
//post
noteRouter.post("/create", async (req, res) => {
    try {
        const notes = new NoteModel(req.body)
        await notes.save()
        res.status(200).json({ msg: "Note has been added", note: req.body })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})
noteRouter.get("/", async (req, res) => {
    try {
        const notes = await NoteModel.find({ userId: req.body.userId })
        res.status(200).json(notes)
    } catch (error) {
        res.status(200).json({ msg: error.message })
    }
})
noteRouter.patch("/update/:noteId", async (req, res) => {

    const { noteId } = req.params

    const userIdinUserDoc = req.body.userId
    try {
        const note = await NoteModel.findOne({ _id: noteId })

        const userIdinNoteDoc = note.userId
        if (userIdinUserDoc == userIdinNoteDoc) {
            //
            await NoteModel.findByIdAndUpdate({ _id: noteId }, req.body)
            res.json({ msg: "Updated" })
        } else {
            res.status(400).json({ msg: "Not authorized!!" })
        }
    } catch (error) {
        res.status(400).json({ error: error })
    }
})
noteRouter.delete("/delete/:noteId", async (req, res) => {

    const { noteId } = req.params

    const userIdinUserDoc = req.body.userId
    try {
        const note = await NoteModel.findOne({ _id: noteId })

        const userIdinNoteDoc = note.userId
        if (userIdinUserDoc == userIdinNoteDoc) {
            //
            await NoteModel.findByIdAndDelete({ _id: noteId })
            res.json({ msg: "Deleted" })
        } else {
            res.status(400).json({ msg: "Not authorized!!" })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = { noteRouter }