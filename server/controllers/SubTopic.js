
const Topic = require("../models/Topic")
const SubTopic = require("../models/SubTopics")
const { uploadImageToCloudinary } = require("../utils/imageUploader")

// Create a new sub-topic for a given section
exports.createSubTopic = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const {topicId} = req.body;
    const { subTopicName, description, ccode,cppcode, javacode } = req.body;
    const subtopicfile = req.files.file;

    // Check if all necessary fields are provided
    if (!subTopicName ||
    !description ) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are Required" })
    }
    console.log(subtopicfile)

    // Upload the video file to Cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      subtopicfile,
      process.env.FOLDER_NAME
    )
    console.log(uploadDetails)
    // Create a new sub-section with the necessary information
    const SubTopicDetails = await SubTopic.create({
      subTopicName: subTopicName,
      description: description,
      ccode: ccode,
      cppcode: cppcode,
      javacode: javacode,
    })

    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Topic.findByIdAndUpdate(
      { _id: topicId },
      { $push: { subTopic: SubTopicDetails._id } },
      { new: true }
    ).populate("subTopic")

    // Return the updated section in the response
    return res.status(200).json({ success: true, data: updatedSection })
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error("Error creating new subTopic", error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

exports.updateSubTopic = async (req, res) => {
  try {
    const {topicId,subTopicId, title, description } = req.body
    const subTopic = await SubTopic.findById(subTopicId)

    if (!subTopic) {
      return res.status(404).json({
        success: false,
        message: "subTopic not found",
      })
    }

    if (title !== undefined) {
        subTopic.title = title
    }

    if (description !== undefined) {
        subTopic.description = description
    }
    if (req.files && req.files.file !== undefined) {
      const file = req.files.file
      const uploadDetails = await uploadImageToCloudinary(
        file,
        process.env.FOLDER_NAME
      )
      subTopic.file = uploadDetails.secure_url
      subTopic.timeDuration = `${uploadDetails.duration}`
    }

    await subTopic.save()

    // find updated section and return it
    const updatedTopic = await Topic.findById(topicId).populate(
      "subTopic"
    )

    console.log("updated section", updatedTopic)

    return res.json({
      success: true,
      message: "Section updated successfully",
      data: updatedTopic,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    })
  }
}

exports.deleteSubTopic = async (req, res) => {
  try {
    const { subTopicId, topicId } = req.body
    await Topic.findByIdAndUpdate(
      { _id: topicId },
      {
        $pull: {
            subTopic: subTopicId,
        },
      }
    )
    const subTopic = await subTopic.findByIdAndDelete({ _id: subTopicId })

    if (!subTopic) {
      return res
        .status(404)
        .json({ success: false, message: "subTopic not found" })
    }

    // find updated section and return it
    const updatedSection = await Topic.findById(topicId).populate(
      "subTopic"
    )

    return res.json({
      success: true,
      message: "subTopic deleted successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the subTopic",
    })
  }
}
