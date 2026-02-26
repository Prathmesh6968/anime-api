const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://animesalt.top"; // replace with actual page URL

async function scrapeAnimeMovies() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const results = [];

    $(".latest-movies-series-swiper-slide").each((i, el) => {
      const li = $(el).find("li");

      // Only Anime Movies
      if (li.hasClass("type-movies") && li.hasClass("category-anime")) {
        const title = li.find("img").attr("alt")?.trim().replace("Image ", "") || null;
        const anime_id = li.find(".lnk-blk").attr("href").replace("https://animesalt.top/movies/", "").replace("/", "");
        const poster = li.find("img").attr("data-src")
          ? "https:" + li.find("img").attr("data-src")
          : null;
        results.push({ title, anime_id, poster });
      }
    });
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

    console.log("🎬 Anime Movies:", results);
  } catch (err) {
    console.error("Error scraping Anime Movies:", err);
  }
}

module.exports= scrapeAnimeMovies;