const Course = require("../model/courses.model");
const Userdb = require("../model/user.model");

exports.getAllCourses = async (req, res) => {
  try {
    // will return documents in the array
    const courses = await Course.find({});
    if (!courses.length) {
      throw Error("Course not present");
    }

    res.status(200).json({ message: "Courses Available", courses });
  } catch (error) {
    const errorMessage = error.message;
    res.status(401).json({ message: errorMessage });
  }
};
exports.addCourses = async (req, res) => {
  if (!req.body) {
    return res
      .status(200)
      .json({ status: "Success", message: "Field Cann't be empty" });
  }
  try {
    let courses = new Course(req.body);
    await courses.save();
    res.status(200).json({ status: "success", courses: courses });
  } catch (err) {
    return res
      .status(401)
      .json({ status: "failed", message: err.message || "An Error Occured!" });
  }
};

exports.enrollCourse = async (req, res) => {
  const { courseId, userId } = req.body;
  if (!courseId || !userId) {
    return res
      .status(404)
      .json({ status: "failed", message: "feild is missing" });
  }

  try{
    const user = await Userdb.findById(userId);
    const course = await Course.findById(courseId);
  if (!user || !course) {
    return res.status(200).json({ message: "user or courses not found" });
  } 
    try {
      if (user.coursesEnrolled.includes(courseId)) {
        res.status(200).json("Already Enrolled");
      } else {
        user.coursesEnrolled.push(courseId);
        await user.save();
        return res
          .status(200)
          .json({ Status: "Succes", message: "Successfully Enrolled" });
      }
    } catch (err) {
      res.status(200).json({ error: err || "An error Occoured" });
  }
  }
  catch(err){
    res.json("error")
  }
};
