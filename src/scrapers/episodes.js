const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeEpisodes(id, season=1) {
  try {

    const url = `https://toonstream.dad/episode/${id}-${season}x1/`;
    

    const { data } = await axios.get(url);
t/episode/${id}-$
    const $ = cheerio.load(data);

    let episodes = [];

    $("#episode_by_temp li").each((i, el) => {

      const title = $(el).find(".entry-title").text().trim();

      const poster =
        $(el).find("img").attr("data-src") ||
        $(el).find("img").attr("src");

      const link = $(el).find("a").attr("href");

      // link se season x episode extract
      let seasonNum = null;
      let episodeNum = null;

      if (link) {
        const match = link.match(/(\d+)x(\d+)/);

        if (match) {
          seasonNum = match[1];
          episodeNum = match[2];
        }
      }

      episodes.push({
        title,
        season: seasonNum,
        episode: episodeNum,
        poster
      });

    });

    return {
      totalEpisodes: episodes.length,
      episodes
    };

  } catch (error) {
    console.error("Scraper error:", error.message);

    return {
      totalEpisodes: 0,
      episodes: []
    };
  }
}

module.exports = scrapeEpisodes;