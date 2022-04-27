const Course = require("../models/Course");

class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }
  jso(req, res, next) {
    // Course.find({}, function (error, courses) {
    //   if (!error) res.json(courses);
    //   else {
    //     res.status(400).json({ error: "ERROR" });
    //   }
    // });

    Course.find({})
      .then((courses) => res.json(courses))
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
