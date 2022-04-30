const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/deleted-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
