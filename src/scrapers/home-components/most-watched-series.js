const { default: axios } = require("axios");
const cheerio = require("cheerio");
const url = require("../../utils/Base_V1.js");

const Most_seriesScraper = async () => {
    try {
        const { data } = await axios.get(url);
        const $ = await cheerio.load(data);
        const results = [];
        $("#torofilm_wdgt_popular-3-all .chart-item").each((i, el) => {
            results.push({
                rank: $(el).find(".chart-number").text().trim(),
                title: $(el).find(".chart-title").text().trim(),
                anime_id: $(el).find(".chart-poster").attr("href").replace("https://animesalt.top/series/", "").replace("/", ""),
                poster: $(el).find(".chart-poster img").attr("data-src").replace("//", "https://")
            })
        })
        var dato
        if (results == [] || undefined) {
            dato = {
                success: false,
                message: "Data not Available!!",
                results: results
            }
        } else {
            dato = {
                success: true,
                message: "Data Available",
                results: results
            }
        }
        return dato

        console.log(results);

    } catch {
        results.push({
            error: $.error
        })
    }

}
module.exports=Most_seriesScraper