const mongoose = require('mongoose');

// Define the schema for MCQuiz
const mcQuizSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    }
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Create the MCQuiz model
const MCQuiz = mongoose.model('MCQuiz', mcQuizSchema);

module.exports = MCQuiz;
