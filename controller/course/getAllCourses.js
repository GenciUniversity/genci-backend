import Course from "../../models/Course.js";

export const getAllCourses = async (req, res) => {
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
