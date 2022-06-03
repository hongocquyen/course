const path = require("path");

const express = require("express");
// const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const route = require("./routes/index");
const db = require("./config/db/index");

const app = express();
const port = process.env.PORT || 3000;

//Connect to DB
db.connect();

//HTTP Logger
// app.use(morgan("tiny"));

//Override method
app.use(methodOverride("_method"));

//Config static public
app.use(express.static(path.join(__dirname, "public")));

//Config template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
