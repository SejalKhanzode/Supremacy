const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const topicRoutes = require("./routes/topic");
const programmingQuesRoutes = require("./routes/programmingQues");
const interviewQuesRoutes = require('./routes/interview')
const discussRoutes = require("./routes/discuss")
const quizRoutes = require('./routes/quiz');
// const questionRoutes = require('./routes/discussRoutes');


const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/auth", userRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/programmingQue", programmingQuesRoutes)
app.use('/api/interview', interviewQuesRoutes)
app.use('/api/discuss', discussRoutes)
app.use("/api/quiz", quizRoutes)
// app.use('/api/discuss', questionRoutes)

//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

