const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/create
  createCourse(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /courses/store
  storeCourse(req, res, next) {
    res.json(req.data);
  }
  // [GET] /courses/:slug
  showSlug(req, res, next) {
    // res.render("slug");"
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/slug", {
          course: mongooseToObject(course),
        });
        // res.json(course);
      })
      .catch(next);

    // res.send(req.params.slug )
  }

  // [GET] /coursesF
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        // courses = courses.map(course => course.toObject())
        res.render("courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
