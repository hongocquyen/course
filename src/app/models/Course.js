const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

//Generate Slug
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
