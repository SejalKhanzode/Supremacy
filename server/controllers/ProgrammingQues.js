const ProgrammingQues = require("../models/ProgrammingQues");

exports.createProgrammingQues = async (req, res) => {
  try {
    const {
      title,
      difficultyLevel,
      topic,
      sampleInput,
      sampleOutput,
      description,
    } = req.body;

    if (
      !title ||
      !difficultyLevel ||
      !topic ||
      !sampleInput ||
      !sampleOutput ||
      !description
    ) {
      return res.status(400).json({
        message: "Enter all the required fields!",
      });
    }

    const question = await ProgrammingQues.create({
      title,
      difficultyLevel,
      topic,
      sampleInput,
      sampleOutput,
      description,
    });

    return res.status(200).json({
      success: true,
      message: "Questions created successfully",
      question,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in creation of Programming Question",
    });
  }
};

exports.getAllProgrammingQues = async (req, res) => {
  try {
    const programmingQues = await ProgrammingQues.find({});
    return res.status(200).json({
      success: true,
      message: "All Programming Questions fetched successfully",
      programmingQues,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in fetching AllProgramming Question",
    });
  }
};

exports.getProgrammingQues = async (req, res) => {
  try {
    const { programmingQueId } = req.params;
    const programmingQue = await ProgrammingQues.findById(programmingQueId);
    
    if (!programmingQue) {
      return res.status(404).json({
        success: false,
        message: "Programming Question not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Programming Question fetched successfully",
      programmingQue,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in fetching Programming Question",
    });
  }
};

exports.updateProgrammingQues = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      difficultyLevel,
      topic,
      sampleInput,
      sampleOutput,
      description,
    } = req.body;

    const updatedQuestion = await ProgrammingQues.findByIdAndUpdate(
      id,
      {
        title,
        difficultyLevel,
        topic,
        sampleInput,
        sampleOutput,
        description,
      },
      { new: true } 
    );

    if (!updatedQuestion) {
      return res.status(404).json({
        success: false,
        message: "Programming Question not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Programming Question updated successfully",
      question: updatedQuestion,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in updating Programming Question",
    });
  }
};

exports.deleteProgrammingQues = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuestion = await ProgrammingQues.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({
        success: false,
        message: "Programming Question not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Programming Question deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in deleting Programming Question",
    });
  }
};

