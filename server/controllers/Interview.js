const InterviewQue = require("../models/InterviewPrep");

exports.createInterviewQue= async(req, res)=>{
    try {
        const {
        question, answer
        } = req.body;
    
        if (
          !question||
          !answer
        ) {
          return res.status(400).send({
            message: "All fields are required!",
          });
        }
    
        const Interview = await InterviewQue.create({
          question, answer
        });
    
        return res.status(201).json({
          success: true,
          data: Interview,
          message: "Interview question is created successfully",
        });
      } catch (error) {
        console.log(error.message);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };

    // Get All Interviewquestion
exports.getAllInterviewquestion = async (req, res) => {
  try {
    const allInterviewQue = await InterviewQue.find({});

    return res.status(200).json({
      success: true,
      data: allInterviewQue,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't Fetch All question Data`,
      error: error.message,
    });
  }
};

exports.deleteInterviewQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletedQue = await InterviewQue.findByIdAndDelete(id);
    if (!deletedQue) {
      return res.status(404).json({
        success: false,
        message: "InterviewQue not found",
        data:deletedQue
      });
    }
  
    res.status(200).json({
      success: true,
      message: "interview Que deleted successfully",
    });

  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ 
        success: false, 
        message: "interview question Cannot be deleted" 
    });
  }
};