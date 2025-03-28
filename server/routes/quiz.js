
const router = require("express").Router()
const {
    createQuiz, getQuiz, updateQuiz, deleteQuiz 
  } = require("../controllers/Quiz");

router.post("/createQuiz", createQuiz);
router.get("/getQuiz", getQuiz);
router.put("/updateQuiz", updateQuiz);
router.delete("/deleteQuiz", deleteQuiz);

module.exports = router;