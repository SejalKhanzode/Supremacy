const mongoose = require("mongoose")

const quizResultSchema = new mongoose.Schema({
  quizID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  completedQuiz: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
})

module.exports = mongoose.model("QuizResult", quizResultSchema)
