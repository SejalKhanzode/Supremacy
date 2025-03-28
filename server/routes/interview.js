
const express = require("express");
const router = express.Router();
const {createInterviewQue, getAllInterviewquestion, deleteInterviewQuestion} = require('../controllers/Interview');

router.post("/createInterviewQue", createInterviewQue)
router.get("/getAllInterviewQuestion", getAllInterviewquestion)
router.delete("/deleteInterviewQue", deleteInterviewQuestion)

module.exports = router