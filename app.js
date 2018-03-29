const express = require("express");
const path = require("path");
const routes = require("./routes");

const port = process.env.PORT || 8081;

const app = express();

app.disable("etag");

app.use(require("body-parser").urlencoded({ extended: true }));

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.use("/", routes);

app.listen(port, function() {
  console.log("App listening on port: ", port);
});
