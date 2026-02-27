const axios = require("axios");
const cheerio = require("cheerio");

const scrapeSeries = async () => {
    const { data } = await axios.get("https://toonstream.dad/category/anime/?type=movies");
    const $ = cheerio.load(data);

    const results = [];

    $("li.series").each((i, el) => {
        const title = $(el).find(".entry-title").text().trim();

        let image = $(el).find("img").attr("src").replace("//","https://");
        if (image && image.startsWith("//")) {
            image = "https:" + image;
        }

        const link = $(el).find("a.lnk-blk").attr("href").replace("https://toonstream.dad/series/","").replace("/","");

        results.push({
            title,
            image,
            link
        });
    });

    return results;
};

scrapeSeries().then(console.log);