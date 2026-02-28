const home = require("./routes/home.routes.js")
const stream = require("./routes/stream.routes.js")
const series = require("./routes/series.routes.js")
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
    res.send(data)
})

app.use("/api",home)
app.use("/api/stream",stream)
app.use("/api/series",series)



module.exports = app
