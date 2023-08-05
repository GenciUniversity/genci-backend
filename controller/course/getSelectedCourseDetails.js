import Course from "../../models/Course.js";

export const getSelectedCourseDetails = async (req, res) => {
  try {
    const selectedCourse = req.params.selectedCourse.toLowerCase()
    if (!selectedCourse) {
      throw Error("Enter Course");
    }

    const course = await Course.find({ slug: selectedCourse });

    if (!course.length) {
      throw Error("Course not present");
    }

    res.status(200).json({ message: "Course Available", course });
  } catch (error) {
    const errorMessage = error.message;
    res.status(401).json({ message: errorMessage });
  }
};
