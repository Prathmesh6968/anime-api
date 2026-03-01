const { default: axios } = require("axios");
const cheerio = require("cheerio");
const url = require("../utils/Base_V5");
const headers = require("../configs/headers");

const newAddedScraper = async () => {
    try {
        const { data } = await axios.get(`${url}/home/`, {
            headers: headers
        });

        const $ = cheerio.load(data);
        const results = [];

        $(".post-lst li").each((_, el) => {

            const episodeCode = $(el).find(".num-epi").text().trim(); // 1x6
            if (!episodeCode) return;

            const [season, episode] = episodeCode.split("x");

            const fullTitle = $(el).find(".entry-title").text().trim();

            const title = fullTitle.replace(/\s\d+x\d+$/, "");

            const href = $(el).find("a.lnk-blk").attr("href");

            let anime_id = href
                ?.replace(`${url}/episode/`, "")
                ?.replace("/", "");
                
            anime_id = anime_id.replace(/[-]?\d+x\d+$/, "");

            const posterSrc = $(el).find("img").attr("src");
            const poster = posterSrc?.startsWith("//")
                ? "https:" + posterSrc
                : posterSrc;

            results.push({
                title,
                anime_id,
                season,
                episode,
                poster
            });
        });

        return results

    } catch (err) {
        console.error("Scraper Error:", err.message);
    }
};

module.exports = newAddedScraper