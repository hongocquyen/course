const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.createCourse);
router.post("/store", courseController.storeCourse);
router.get("/:slug", courseController.showSlug);
router.get("/:id/edit", courseController.editCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
router.delete("/:id/permanently", courseController.permanentlydeleteCourse);
router.patch("/:id/restore", courseController.restoreCourse);
router.get("/", courseController.index);

module.exports = router;
