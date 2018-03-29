const express = require("express");
const moment = require("moment");

const data = require("../data/daily.json");
const router = express.Router();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

router.get("/:date", function(req, res) {
  const { date } = req.params;

  const dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(
      moment(date, "YYYYMMDD")
        .add(i, "day")
        .format("YYYYMMDD")
    );
  }

  const forecast = dates.map(d => {
    const datum = data[d];
    if (datum) {
      return {
        DATE: d,
        TMIN: datum[0],
        TMAX: datum[1]
      };
    } else {
      return {
        DATE: d,
        TMIN: getRndInteger(20, 40),
        TMAX: getRndInteger(40, 60)
      };
    }
  });

  res.status(200).json(forecast);
});

module.exports = router;
