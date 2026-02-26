const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://animesalt.top"; // replace with actual URL

async function scrapeLatestSeries() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const results = [];

    $(".latest-movies-series-swiper-slide").each((i, el) => {
      const li = $(el).find("li");
      if (!li.hasClass("series")) return; // skip if not a series

      const anime_id = li.find(".lnk-blk").attr("href").replace("https://animesalt.top/series/","").replaceAll("/","");
      const poster = "https:" + li.find("img").attr("data-src");
      const title = li.find("img").attr("alt").replace("Image ","");

      results.push({ title, anime_id, poster});
    });
    var dato
    if(results==[] || undefined ){
      dato = {
        success: false,
        message: "Data not Available!!",
        results: results
      }
    }else{
      dato={
        success: true,
        message: "Data Available",
        results: results
      }
    }
    return dato

    console.log(results);
  } catch (err) {
    console.error("Error scraping latest series:", err);
  }
}

module.exports= scrapeLatestSeries;