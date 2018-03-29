const express = require("express");

const data = require("../data/daily.json");
const router = express.Router();

router.get("/", function(req, res) {
  const dates = Object.keys(data).map(date => ({ DATE: date }));
  res.status(200).json(dates);
});

router.get("/:date", function(req, res, next) {
  const { date } = req.params;

  const temperature = data[date];

  if (temperature) {
    res.status(200).json({
      DATE: date,
      TMIN: temperature[0],
      TMAX: temperature[1]
    });
  } else {
    return res.status(404).send("HTTP Error code 404");
  }
});

router.post("/", function(req, res) {
  const { DATE, TMIN, TMAX } = req.body;

  if (!DATE || !TMIN || !TMAX) {
    return res.status(400).send("HTTP 400 Bad Request");
  }

  data[DATE] = [TMIN, TMAX];

  res.status(201).json({ DATE });
});

router.delete("/:date", function(req, res) {
  const { date } = req.params;

  const temperature = data[date];

  if (temperature) {
    delete data[date];
    res.status(200).send(`Deleted data for date: ${date}`);
  } else {
    return res.status(404).send("HTTP Error code 404");
  }
});

module.exports = router;
