import Course from "../../models/Course.js";

export const getCategoryCourses = async (req, res) => {
  try {
    // converts to lowercase if present in the body
    const category = req.body.category?.toLowerCase();
    if (!category) {
      throw Error("Category required");
    }

    // queries if the category is equals to req.body.category
    // return the array of documents
    const courses = await Course.find({ category });

    if (!courses.length) {
      throw Error("Course not present");
    }

    res.status(200).json({ message: "Courses Available", courses });
  } catch (error) {
    const errorMessage = error.message;
    res.status(401).json({ message: errorMessage });
  }
};
