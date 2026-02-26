const homeController = require("../controllers/home.contollers.js")
const express = require("express")

const homeRoute = express.Router()

homeRoute.get("/",homeController)

module.exports = homeRoute