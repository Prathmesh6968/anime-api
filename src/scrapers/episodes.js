const axios = require("axios");
const cheerio = require("cheerio");
const baseUrl = require("../utils/Base_V5");
const headers = require("../configs/headers");

const episodeScraper = async (slug,season=1) => {
  try {
    const url = `${baseUrl}/episode/${slug}-${season}x1/`;

    const { data } = await axios.get(url, {
      headers: headers,
    });

    const $ = cheerio.load(data);

    let episodes = [];

    $("#episode_by_temp li").each((i, el) => {
      const episodeNumber = $(el).find(".num-epi").text().trim();
      const title = $(el).find(".entry-title").text().trim();
      const [season,episode] = episodeNumber.split("x")

      const imgTag = $(el).find("img");

      let image =
        imgTag.attr("data-src") ||
        imgTag.attr("data-lazy-src") ||
        imgTag.attr("data-original") ||
        imgTag.attr("src");

      if (image && image.startsWith("//")) {
        image = "https:" + image;
      }

      const link = $(el).find("a.lnk-blk").attr("href");

      episodes.push({
        title,
        season,
        episode,
        image,
        link,
      });
    });

    let seasons = [];
    $(".aa-cnt li a").each((i, el) => {
      seasons.push({
        season: $(el).attr("data-season"),
        text: $(el).text().trim(),
      });
    });

    const totalSeasons = $(".n_s").text().trim();

    const result = {
      totalSeasons,
      seasons,
      episodes,
    };

    return result;

  } catch (err) {
    console.error("Scraping Error:", err.message);
    return null;
  }
};

module.exports = episodeScraper