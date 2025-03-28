const DiscussQue = require("../models/DiscussQue");

exports.createDiscussQue = async (req, res) => {
  try {
    const { question, description } = req.body;

    if(!question||!description){
        res.status(401).json({
            success:false,
            message:"All fields are required"
        })
    }

    const newDiscussQue = await DiscussQue.create({
      question,
      description,
    });

    res.status(200).json({
      success: true,
      message: "Discussion question created succesfully",
      newDiscussQue,
    });
  } catch (error) {
    console.log("Error in creation of Discussion que");
    return res.status(400).json({
      success: false,
      message: "Error while creating post",
    });
  }
};

exports.getAllQuestion = async (req, res) => {
  try {
    const discussQuestions = await DiscussQue.find({})
      .populate("likes")
      .populate("comments")
      .exec();
    
    res.status(200).json({
      success: true,
      message: "All discussion questions are fetched successfully ",
      discussQuestions,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching post",
    });
  }
};
