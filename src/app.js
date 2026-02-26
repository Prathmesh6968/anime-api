const home = require("./routes/home.routes.js")
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    const data = {
        success: true,
        message: {
            Documentation: "For Documentation prefer to this repository https://github.com/Prathmesh6968/anime-api.git",
            contacts: [
                {telegram: "@Neonsenpaigalaxy"},
                {instagram: "Use Nahi Karta"},
                {x: "@PrathmeshAnbule"}
            ]
        }   
    }
})

app.use("/api",home)
app.use("/api/fresh-drop",fresh)
app.use("/api/latest-movies",latest)
app.use("/api/most-watched-films",most_WatchedFilms)
app.use("/api/most-watched-series",most_WatchedSeries)
app.use("/api/on-air-series",on_air)


module.exports = app
