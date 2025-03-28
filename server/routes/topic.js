
const router = require("express").Router()
const {
    createTopic,
    getAllAlgoTopic,
    getAllDSTopic,
    getTopicById,
    getAllTopics,
  } = require("../controllers/Topic");

  

router.post("/createTopic", createTopic);
router.get("/getAllTopics", getAllTopics);
router.get("/getAllDataStructures", getAllDSTopic);
router.get("/getAllAlgorithms", getAllAlgoTopic);
router.get("/getTopic", getTopicById);

module.exports = router;