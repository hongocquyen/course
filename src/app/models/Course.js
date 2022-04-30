const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//Add plugins

//Generate Slug
mongoose.plugin(slug);

//Override method
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
