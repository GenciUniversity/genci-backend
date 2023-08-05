import { Router } from "express";
import { getAllCourses } from "../controller/course/getAllCourses.js";
import { getCategoryCourses } from "../controller/course/getCategoryCourses.js";
import { getSelectedCourseDetails } from "../controller/course/getSelectedCourseDetails.js";

export const courseRoute = Router();

courseRoute.get("/", getAllCourses);
courseRoute.get("/:selectedCourse", getSelectedCourseDetails)

courseRoute.post("/category", getCategoryCourses);
