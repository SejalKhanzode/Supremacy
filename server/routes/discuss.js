
const express = require("express");
const router = express.Router();
const {createDiscussQue, getAllQuestion} = require("../controllers/DiscussionQue")
const {likeDiscussQue, unlikeDiscussQue} = require("../controllers/DiscussionLike")
const {createComment} = require('../controllers/DiscussionComment');
const { auth } = require("../middleware/auth");


// Discussion ques
router.post("/createQue", createDiscussQue)
router.get("/getAllQuestions", getAllQuestion)

// like
router.post("/like",auth, likeDiscussQue)
router.post("/unlike",auth, unlikeDiscussQue)

// comment
router.post("/createComment",auth, createComment)

module.exports = router