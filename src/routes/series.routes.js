const seriesController = require("../controllers/series.controllers.js")
const express = require("express")

const seriesRoute = express.Router()

seriesRoute.get("/",seriesController)

module.exports = seriesRoute