const express = require("express");

const router = express.Router();

const historical = require("./historical");
const forecast = require("./forecast");

router.use("/historical", historical);
router.use("/forecast", forecast);

module.exports = router;
