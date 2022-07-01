const express = require("express");
const router = express.Router();


const { getNotes, addNotes, deleteNotes, updateNotes } = require("../controllers/notesController");

router.get("/", (req, res) => {
  res.json({ status: "running" });
});

router.route('/api/notes').get(getNotes).post(addNotes);
router.route("/api/notes/:id").put(updateNotes).delete(deleteNotes);



module.exports = router;