/**
 * @desc    All Required Inported Functions, Packages and Modules
 */
const home = require("./routes/home.routes.js")
const search = require("./routes/search.routes.js")
const stream = require("./routes/stream.routes.js")
const series = require("./routes/series.routes.js")
const express = require("express")
const app = express()

/**
 * @desc    All Routes
 * @access  Public
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: {
      Documentation: "For Documentation prefer to this repository https://github.com/Prathmesh6968/anime-api.git",
      contacts: [
        { telegram: "@Neonsenpaigalaxy" },
        { instagram: "Use Nahi Karta" },
        { x: "@PrathmeshAnbule" }
      ]
    }
  })
})


app.use("/api", home)
app.use("/api/search",search)
app.use("/api/series", series)
app.use("/api/stream", stream)

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  })
})

/**
 * @desc    Global Error Handling Middleware
 */
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  })
})

module.exports = app