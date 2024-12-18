const Topic = require("../models/Topics");

const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createTopic = async (req, res) => {
  try {
    const { topicName, type, description } = req.body;
    const thumbnail = req.files.thumbnailImage;

    if (!topicName || !type || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const newTopic= await Topic.create({
      topicName,
      type,
      description,
      thumbnail: thumbnailImage.secure_url,
    });

    // Then populate it
    // const populatedCategory = await Topic.findById(newTopic._id).populate("SubTopic");

    res.status(200).json({
      success: true,
      // data: populatedCategory,
      message: "Topic Created Successfully",
      newTopic
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      success: false,
      message: "Failed to create Topic",
      error: error.message,
    });
  }
};

// Get All DS Topic List
exports.getAllDSTopic = async (req, res) => {
  try {
    const allDSTopic = await Topic.find({ type: "Data Structure" });

    return res.status(200).json({
      success: true,
      data: allDSTopic,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't Fetch DS Data`,
      error: error.message,
    });
  }
};

// Get All Algo Topic List
exports.getAllAlgoTopic = async (req, res) => {
  try {
    const allAlgoTopic = await Topic.find({ type: "Algorithm" });

    return res.status(200).json({
      success: true,
      data: allAlgoTopic,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Algorithms Data`,
      error: error.message,
    });
  }
};

// get Topic by id
exports.getTopicById = async (req, res) => {
  try {
    const { id } = req.body;

    const topic = await Topic.findById(id);
    console.log(topic);
    if (!topic) {
      return res.status(200).json({
        success: false,
        message: "Topic not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: topic,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// get Subtopics by topicId {topicPageDetails}
exports.getTopicDetails = async (req, res) => {
  try {
    const { topicId } = req.body;
    const topicDetails = await Topic.find({
      id: topicId,
    })
      .populate({
        path: "topicContent",
        populate: {
          path: Topic,
        },
      })
      .exec();

    //    validation
    if (!topicDetails) {
      return res.status(400).json({
        success: false,
        message: "Topic not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "TopicDetails fetched successfully",
      data: topicDetails,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete
exports.deleteTopic = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Topic ID is required",
      });
    }

    const topic = await Topic.findByIdAndDelete(id);

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Topic deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Topic Cannot be deleted",
    });
  }
};
