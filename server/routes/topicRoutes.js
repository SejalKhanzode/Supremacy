const express = require('express');
const router = express.Router();

const {
    createTopic,
    // editTopic,
    getAllAlgoTopic,getAllDSTopic,
    getTopicById,
    // getSubtopicsByTopicName,
    // updateTopicById,
    deleteTopic,
} = require('../controllers/Topics');


const {
    createSubTopic, updateSubTopic, deleteSubTopic
} = require('../controllers/SubTopic');


const { auth, isAdmin } = require("../middleware/auth")

// **************************************Topic************************************************************
router.post("/createTopic",auth, isAdmin, createTopic);
router.get("/getAllDataStructures", getAllDSTopic);
router.get("/getAllAlgorithms", getAllAlgoTopic)
router.get("/getTopic",getTopicById);

// router.put("/updateTopic/:id", updateTopicById);
router.delete("/deleteTopic/:id",auth, isAdmin, deleteTopic);


// **************************************SubTopic************************************************************
router.post("/createSubTopic", auth, isAdmin, createSubTopic);


module.exports = router