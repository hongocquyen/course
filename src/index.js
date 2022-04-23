const path = require("path");

const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routes/index");
const db = require("./config/db/index")

const app = express();
const port = 3000;

//Connect to DB
db.connect();

//HTTP Logger
app.use(morgan("tiny"));

//Config static public
app.use(express.static(path.join(__dirname, "public")));

//Config template engine
app.engine("hbs", engine({ extname: ".hbs" }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
