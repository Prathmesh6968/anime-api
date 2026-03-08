const axios = require("axios");
const cheerio = require("cheerio");
const url = require("../../utils/Base_V5.js");
const default_Header = require("../../configs/headers.js");

const toonstreamScraper = async (anime_id, season, episode) => {
    try {
        // ✅ Encode anime_id for safety
        const episodeUrl = `${url}/episode/${encodeURIComponent(anime_id)}-${season}x${episode}`;

        const { data } = await axios.get(episodeUrl, {
            headers: default_Header,
            timeout: 10000
        });

        const $ = cheerio.load(data);
        const servers = [];

        // 🔥 Extract server iframe links
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

        if (servers.length === 0) {
            return [];
        }

        // 🚀 Parallel fetching for speed
        const finalResults = await Promise.all(
            servers.map(async (server) => {
                try {
                    const { data: innerHTML } = await axios.get(server.link, {
                        headers: default_Header,
                        timeout: 10000
                    });

                    const $$ = cheerio.load(innerHTML);

                    const iframeSrc = $$("iframe").attr("src");
                    const videoSrc = $$("video source").attr("src");

                    let embed = null;

                    const baseReplace = (link) =>
                        link

                    if (iframeSrc) {
                        embed = baseReplace(iframeSrc);
                    } else if (videoSrc) {
                        embed = baseReplace(videoSrc);
                    }

                    return {
                        server: server.server,
                        embed: embed || "Not Found"
                    };
                } catch (err) {
                    return {
                        server: server.server,
                        embed: "Error loading"
                    };
                }
            })
        );

        return finalResults;

    } catch (err) {
        console.error("Main Page Error:", err.message);
        return [];
    }
};

module.exports = toonstreamScraper;