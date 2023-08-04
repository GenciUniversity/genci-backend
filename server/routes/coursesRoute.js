const {Router} = require('express')
const { getAllCourses, addCourses, enrollCourse } = require('../controller/Courses.connection');
const { getRecentCourses } = require('../controller/getRecentCourses.controller');

const courseRoute = Router();

courseRoute.get("/", getAllCourses);
courseRoute.post("/add", addCourses);
courseRoute.post("/enrollcourse", enrollCourse);
courseRoute.get("/getrecentcourses/:userId", getRecentCourses);





module.exports = courseRoute;