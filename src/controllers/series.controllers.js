const seriesScraper = require("../scrapers/series.js")

const seriesController = async(req,res)=>{
    const page = req.query.page
    const results = await seriesScraper(page)
    let data;
    if(results == {}){
        data = {
            success: false,
            message: "Data not found !!",
            results: results
        }
    }
    else{
        data={
            success: true,
            message: "Data found !!",
            results:results
        }
    }
    res.send(data)
}
module.exports = seriesController