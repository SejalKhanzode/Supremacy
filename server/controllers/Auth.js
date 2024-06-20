const User = require("../models/User");

exports.signup = async(req, res)=>{
  try{
    const {
      firstName,
      lastName,
      email,
      password, accountType
    } = req.body;
    // validations
    if (!firstName || !lastName || !email || !password) {
      return res.status(403).json({
          success: false,
          message: "All fields are required",
      })
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    accountType,
    image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
})

  // return res
  return res.status(200).json({
    success: true,
    message: "User has been successfully registered",
    user,
});
  }catch (error) {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: "User can not be registered. Please try again",
    })
}
}

exports.login = async(req, res)=>{
  try{
    const {
      email,
      password
    } = req.body;
    // validations
    if (!email || !password) {
      return res.status(403).json({
          success: false,
          message: "All fields are required",
      })
  }

 // check if user exist or not
 const user = await User.findOne({ email });
 if (!user) {
  return res.status(401).json({
      success: false,
      message: "User is not Registered with us, Please SignUp to Continue",
  });
}

  // return res
  return res.status(200).json({
    success: true,
    message: "User Logged in successfully",
    user,
});
  }catch (error) {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: "User are not registered. Please Signup",
    })
}
}