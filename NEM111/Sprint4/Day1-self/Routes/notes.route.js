const express = require("express")
const { NotesModel } = require("../Model/notes.mode")

const noteRouter = express.Router()

noteRouter.post("/add", async (req, res) => {
    try {
        const note = new NotesModel(req.body)

    } catch (error) {

    }
})
noteRouter.get("/", (req, res) => {

})
noteRouter.patch("/update/:noteId", (req, res) => {

})
noteRouter.delete("/delete/:noteId", (req, res) => {

})

module.exports = { noteRouter }