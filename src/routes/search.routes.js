const searchController = require("../controllers/search.controllers")
const express = require("express")

const searchRoute = express.Router()

/**
 * @router For /api/search
 * @desc Router For Search Route
 * @access Public
 */
searchRoute.get("/",searchController)

module.exports = searchRoute