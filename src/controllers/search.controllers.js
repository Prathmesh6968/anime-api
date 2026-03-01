const searchScraper = require("../scrapers/search")

const searchController = async (req, res, next) => {
  try {
    const keyword = req.query.s
    const page = req.query.page || 1

    if (!keyword) {
      res.status(400)
      throw new Error("Keyword is required")
    }

    const results = await searchScraper(keyword, page)

    res.json({
      success: true,
      mmessage: "Data Found!!",
      results
    })

  } catch (err) {
    next(err)
  }
}

module.exports = searchController