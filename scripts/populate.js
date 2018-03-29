const csv = require("fast-csv");
const path = require("path");
const fs = require("fs");

const dataFolder = path.resolve(__dirname, "..", "data");
const fileInPath = path.resolve(dataFolder, "daily.csv");
const fileOutPath = path.resolve(dataFolder, "daily.json");

const json = {};

csv
  .fromPath(fileInPath)
  .on("data", function(data) {
    const [date, tmax, tmin] = data;
    if (date !== "DATE") {
      json[date] = [tmin, tmax];
    }
  })
  .on("end", function() {
    fs.writeFile(fileOutPath, JSON.stringify(json), "utf8");
  });
