const asyncHandler = require('express-async-handler');
const Notes = require('../models/notesModal')

const getNotes = asyncHandler(async (req, res) => {
  const Note = await Notes.find();
  res.json(Note);
})

const addNotes = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please make sure you have a title, tagline, body')
  }
  const Note = await Notes.create({
    title: req.body.title,
    tagline: req.body.tagline,
    body: req.body.body,
  })
  res.status(200).json({ message: "Note Added!", note: Note });
})
const updateNotes = asyncHandler(async (req, res) => {
  const Note = await Notes.findById(req.params.title)
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please make sure you have provided title')
  }
  const updatedNote = await Notes.findById(req.params.id, req.body);

  res.status(200).json({ message: "Note Updated", Note: updatedNote });
})
const deleteNotes = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);
    throw new Error('Please make sure you have provided title')
  }
  const Note = await Notes.findById(req.params.id)
  const deleteNote = await Notes.remove(Note);
  res.status(200).json({ message: deleteNote });
})


module.exports = { getNotes, addNotes, updateNotes, deleteNotes };