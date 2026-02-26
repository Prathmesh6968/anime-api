const home = require("../scrapers/home.js")

const homeController = async(req,res)=>{
    const data = await home()
    res.send(data)
}
module.exports = homeController