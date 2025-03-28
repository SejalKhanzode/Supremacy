const bcrypt = require('bcrypt');
const User = require('../models/User');  
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType:"Student",
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    // Respond with success
    res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to register user",
    });
  }
};

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please fill all the details carefully",
        });
      }
  
      let user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User is not registered",
        });
      }
  
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };
  
      if (await bcrypt.compare(password, user.password)) {
        let token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
  
        user = user.toObject();
        user.token = token;
        user.password = undefined;
  
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
  
        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: "User Logged in successfully",
        });
      } else {
        return res.status(403).json({
          success: false,
          message: "Password Incorrect",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Login Failure",
      });
    }
  };
  
  exports.getUserDetails = async (req, res) => {
      try {
          
          const userId = req.user.id; 
          const userDetails = await User.findById(userId).populate("additionalDetails");
          
          return res.status(200).json({
              success: true,
              data: userDetails
          });
  
      } catch (error) {
          return res.status(500).json({
              success: false,
              message: "Error fetching user details",
              error: error.message
          });
      }
  }
  
  
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({
        accountType:"Student"
      });
  console.log("users>>", users);
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: error.message });
    }
  };
