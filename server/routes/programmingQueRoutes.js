const express = require("express");
const router = express.Router();
const {
  createProgrammingQues,
  getAllProgrammingQues,
  getProgrammingQues,
  updateProgrammingQues,
  deleteProgrammingQues,
} = require("../controllers/ProgrammingQues");
const {auth, isAdmin } = require("../middleware/auth");


router.post("/createProgrammingQue", auth, isAdmin, createProgrammingQues);
router.get("/getAllProgrammingQues", getAllProgrammingQues);
router.get("/getProgrammingQue/:programmingQueId", getProgrammingQues);
router.put("/updateProgrammingQue/:id", updateProgrammingQues);
router.delete("/deleteProgrammingQue/:id", auth, isAdmin,deleteProgrammingQues);

module.exports = router;
