const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.disable("etag");

app.use(require("body-parser").urlencoded({ extended: true }));

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.use("/", routes);

app.listen(8081, function() {
  console.log("App listening on port: ", 8081);
});
