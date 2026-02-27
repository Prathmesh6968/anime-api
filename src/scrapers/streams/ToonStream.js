const axios = require("axios");
const cheerio = require("cheerio");
const url = require("../../utils/Base_V5.js");
const default_Header = require("../../configs/headers.js");

const toonstreamScraper = async (anime_id, season, episode) => {
    try {
        const { data } = await axios.get(
            `${url}/episode/${anime_id}-${season}x${episode}`,
            {
                headers: default_Header,
                timeout: 10000
            }
        );

        const $ = cheerio.load(data);
        const servers = [];

        $("#aa-options > div.video").each((_, el) => {
            let iframe =
                $(el).find("iframe").attr("src") ||
                $(el).find("iframe").attr("data-src");

            if (!iframe) return;

            iframe = iframe.replace(/&#038;/g, "&");

            servers.push({
                server: $(el).attr("id") || "unknown",
                link: iframe
            });
        });

        const finalResults = [];

        for (let server of servers) {
            try {
                const { data: innerHTML } = await axios.get(server.link, {
                    headers: default_Header,
                    timeout: 10000
                });

                const $$ = cheerio.load(innerHTML);

                const realIframe = $$("iframe").attr("src");
                const videoSource = $$("video source").attr("src");

                finalResults.push({
                    server: server.server,
                    embed: realIframe || videoSource || "Not Found"
                });

            } catch (err) {
                finalResults.push({
                    server: server.server,
                    embed: "Error loading"
                });
            }
        }

        return finalResults;

    } catch (err) {
        console.error("Main Page Error:", err.message);
        return []; // 🔥 important to prevent crash
    }
};

module.exports = toonstreamScraper;