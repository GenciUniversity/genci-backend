import { Router } from "express";
import { getAllCourses } from "../controller/course/getAllCourses.js";

export const courseRoute = Router();

courseRoute.get("/", getAllCourses);
