import { Router } from "express";
import { getAllCourses } from "../controller/course/getAllCourses.js";
import { getCategoryCourses } from "../controller/course/getCategoryCourses.js";

export const courseRoute = Router();

courseRoute.get("/", getAllCourses);
courseRoute.post("/category", getCategoryCourses);
