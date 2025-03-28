
const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getAllUsers} = require('../controllers/Auth');

router.post("/signup", registerUser)
router.post("/login", loginUser)
router.get("/getAllUsers", getAllUsers)

module.exports = router