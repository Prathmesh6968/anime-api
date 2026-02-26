const { default: axios } = require("axios");
const cheerio = require("cheerio");
const url = require("../../utils/Base_V1.js"); // make sure this exports a string URL

const freshdropScraper = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results = [];

    $(".latest-ep-swiper-slide").each((i, el) => {
      const title = $(el).find(".entry-title").text().trim();
      const anime_id = $(el).find(".lnk-blk").attr("href").replace("https://animesalt.top/series/","").replace("/","");
      const poster = "https:" + $(el).find("img").attr("data-src");
      const season = $(el).find(".post-ql").text().replace("Season","").trim();
      const episode = $(el).find(".year").text().trim().replace("EP:","");

      results.push({ title, anime_id, poster, season, episode });
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
    console.error("Error scraping latest episodes:", err);
  }
};

module.exports= freshdropScraper