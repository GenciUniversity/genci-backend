const express = require("express");
const { signup, getAllUser } = require("../controller/auth.controller");
const authRoute = express.Router()



authRoute.post('/signup', signup);

//Created for debbuging purpose
authRoute.get('/alluser', getAllUser)





module.exports = authRoute;