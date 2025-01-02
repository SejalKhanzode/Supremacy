const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const topicRoutes = require("./routes/topicRoutes");
const programmingQuesRoutes = require("./routes/programmingQueRoutes");
const mcquizRoutes = require('./routes/mcquizRoutes');
const questionRoutes = require('./routes/discussRoutes');
const interviewQuesRoutes = require('./routes/interviewQueRoutes')


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

// //routes
app.use("/api/auth", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/programmingQue", programmingQuesRoutes)
app.use("/api/quiz", mcquizRoutes)
app.use('/api/discuss', questionRoutes)
app.use('/api/interviewQues', interviewQuesRoutes)

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

