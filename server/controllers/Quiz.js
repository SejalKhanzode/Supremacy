const MCQuiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  try {
    const { topic, question, options, correctAnswer } = req.body;

    if (!topic || !question || !options || !correctAnswer) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMcquiz = await MCQuiz.create({
      topic,
      question,
      options,
      correctAnswer,
    });

    console.log(newMcquiz);

    return res.status(201).json({
      success: true,
      message: "MCQuiz created successfully",
      newMcquiz,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in MCQuiz creation",
      error: error.message || error,
    });
  }
};


exports.getQuiz = async (req, res) => {
  try {
    const { topicName } = req.body;
    const mcquizzes = await MCQuiz.find({ topicName });

    if (!mcquizzes.length) {
      return res.status(404).json({
        success: false,
        message: "No MCQuizzes found for the given topic",
      });
    }

    return res.status(200).json({
      success: true,
      message: "MCQuizzes fetched successfully",
      mcquizzes
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error fetching MCQuizzes",
    });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const { topic, question, options, correctAnswer } = req.body;

    const updatedMcquiz = await MCQuiz.findByIdAndUpdate(
      // id,
      { topic, question, options, correctAnswer },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Error in MCQuiz updated successfully",
      data: updatedMcquiz,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in MCQuiz updation",
    });
  }
};

exports.deleteQuiz = async(req, res)=>{
    try{

        const {id} = req.body;
        const deletedMcquiz = await MCQuiz.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "MCQuiz deleted successfully",
            data:deletedMcquiz
          });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Error in MCQuiz deletion'
        })
    }
}