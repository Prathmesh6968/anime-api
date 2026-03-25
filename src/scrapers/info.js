const { default: axios } = require("axios");
const cheerio = require("cheerio")
const url = require("../utils/Base_V5")
const header = require("../configs/headers")

const infiScraper = async(anime_id)=>{
    try{
        const {data} = await axios.get(`${url}/series/${anime_id}/`,{headers:header})
        const $ = await cheerio.load(data)
        const title = $(".fg1 .entry-title").text().trim()
        const descriptionDiv = $(".description");

        // First <p> = Story
        const overview = descriptionDiv.find("p").first().text().trim();

        // Remaining <p> tags
        const details = descriptionDiv.find("p").slice(1);

        let language, quality, runningTime;

        details.each((i, el) => {
            const text = $(el).text().trim();

            if (text.includes("Language:")) {
                language = text.replace("Language:", "").trim();
            }

            if (text.includes("Quality:")) {
                quality = text.replace("Quality:", "").trim();
            }

            if (text.includes("Running time:")) {
                runningTime = text.replace("Running time:", "").trim();
            }
        });

        const genres = $(".genres a").map((i, el) => $(el).text().trim()).get();
        const year = $(".year").text().trim()
        const seasons = $(".seasons").text().trim().replace("Seasons","").trim()
        const episodes = $(".entry-meta .episodes").text().trim().replace("Episodes","").trim()
        const rating = $(".vote-cn .vote").text().replace("TMDB","").trim()
        let poster =
                imgTag.attr("data-src") ||
                imgTag.attr("data-lazy-src") ||
                imgTag.attr("data-original") ||
                imgTag.attr("src");

            if (poster && poster.startsWith("data:image")) {
                poster = null;
            }

            if (poster && poster.startsWith("//")) {
                poster = "https:" + poster;
            }
        const results = {
            title,
            anime_id,
            poster,
            overview,
            language,
            quality,
            runningTime,
            genres,
            year,
            seasons,
            episodes,
            rating
        }
        return results
    }catch(err){
        console.log(err)
    }
}

module.exports = infiScraper