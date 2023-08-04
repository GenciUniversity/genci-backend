const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    // course name
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    // course educator
    educator: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },

    // course time duration in hours
    duration: {
      type: Number,
      default: 1,
    },

    // course type
    // could not be type as it will mismatch with schema option "type"
    // it will be only Practial or Knowledge
    courseType: {
      type: String,
      enum: ["Practical", "Knowledge"],
      required: true,
    },

    // course category
    category: {
      type: String,
      maxLength: 20,
      trim: true,
      lowercase: true,
    },

    // price
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;