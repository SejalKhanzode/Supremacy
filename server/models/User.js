
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		accountType: {
			type: String,
			enum: ["Admin", "Student"],
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
		approved: {
			type: Boolean,
			default: true,
		},
		attemptedQuizzes: [
			{
			  quizId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Quiz',
				required: true,
			  },
			  answers: [
				{
				  questionId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Quiz.questions',
				  },
				  answer: String,
				},
			  ],
			  score: {
				type: Number,
				default: 0,
			  },
			  attemptedAt: {
				type: Date,
				default: Date.now,
			  },
			},
		  ],
		programmingQueDetails:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:"ProgrammingQue"
		}],
		token: {
			type: String,
		},
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", userSchema);