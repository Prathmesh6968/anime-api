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



module.exports = app
