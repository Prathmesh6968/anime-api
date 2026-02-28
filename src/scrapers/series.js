const { default: axios } = require("axios")
const cheerio = require("cheerio")
const url = require("../utils/Base_V5.js")
const Header = require("../configs/headers.js")

const seriesScraper = async (page = 1) => {
    const { data } = await axios.get(`${url}/series/page/${page}/`, { headers: Header })
    const $ = await cheerio.load(data)
    const anime = []
    $("#aa-movies li.series").each((_, el) => {
        const title = $(el).find("h2.entry-title").text().trim()
        const anime_id = $(el).find("a.lnk-blk").attr("href").replace("https://toonstream.dad/series/", "").replace("/", "")
        const poster = "https:" + $(el).find("img").attr("src")
        anime.push({ title, anime_id, poster })
    })


    const currentPage = Number($(".current").text().trim())


    let totalPages = 1;
    $(".page-link").each((_, el) => {
        let pageNum = $(el).text().trim()
        if (!isNaN(pageNum)) {
            totalPages = Math.max(totalPages, pageNum)
        }
    })

    const results = {
        currentPage,
        totalPages,
        results: anime
    }

    return results


}
module.exports = seriesScraper