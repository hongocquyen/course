const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/create
  createCourse(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /courses/:id/edit
  editCourse(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  // [PUT] /courses/:id
  updateCourse(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /courses/:id
  deleteCourse(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [POST] /courses/store
  storeCourse(req, res, next) {
    const formData = req.body;

    //Generate slug
    // const name = req.body.name;
    // formData.slug = name
    //   .toLowerCase()
    //   .replace(/[\u0300-\u036f]/g, "") //remove diacritics
    //   .toLowerCase()
    //   .replace(/\s+/g, "-") //spaces to dashes
    //   .replace(/&/g, "-and-") //ampersand to and
    //   .replace(/[^\w\-]+/g, "") //remove non-words
    //   .replace(/\-\-+/g, "-") //collapse multiple dashes
    //   .replace(/^-+/, "") //trim starting dash
    //   .replace(/-+$/, ""); //trim ending dash

    // Add to DB
    const course = new Course(formData);
    Course.create(course, (err, item) => {
      if (err) next(err);
      else {
        res.redirect("/courses");
      }
    });

    // res.send("SAVED");
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

  // [GET] /courses
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
