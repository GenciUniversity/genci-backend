const Course = require("../model/courses.model");
const Userdb = require("../model/user.model");

exports.getRecentCourses = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await Userdb.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ error: "error", message: "user not found" });
    }
    try {
      let coursesEnrolled = user.coursesEnrolled;
      let allcoursesdetails = [];
      for (let i = 0; i < coursesEnrolled.length; i++) {
        let course123 = await Course.findById(coursesEnrolled[i]);
        allcoursesdetails.push(course123);
      }
      res.status(200).json(allcoursesdetails);
    } catch (err) {
      res.send({
        Status: "failed",
        message: err || "an error occoured",
      });
    }
  } catch (e) {
    res.send({
      Status: "failed",
      message: e.message || "an error occoured",
    });
  }
};
