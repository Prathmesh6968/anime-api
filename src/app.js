const home = require("./routes/home.routes.js")
const express = require("express")

const app = express()

app.use("/api",home)

module.exports = app