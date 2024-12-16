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
} = require('../controllers/Topic');


// const {
//     createSubTopic,
// } = require('../controllers/SubTopic');


const { auth, isAdmin } = require("../middleware/auth")

// **************************************Topic************************************************************
router.post("/createTopic", auth, createTopic);
router.get("/getAllDataStructures", getAllDSTopic);
router.get("/getAllAlgorithms", getAllAlgoTopic)
router.get("/getTopic",getTopicById);
// router.get("/:topic", getTopicByName);
// router.get("/topicName/subtopics", getSubtopicsByTopicName);
// router.put("/updateTopic/:id", updateTopicById);
router.delete("/deleteTopic/:id", deleteTopic);


// **************************************SubTopic************************************************************
// router.post("/createSubTopic", auth, isAdmin, createSubTopic);
// router.get("/getAllTopic", getAllTopic);
// router.get("/getTopic/:id",getTopicById);




module.exports = router