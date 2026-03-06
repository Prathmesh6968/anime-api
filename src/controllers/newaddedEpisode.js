const redis = require("../configs/redis.js");
const newAddedEpisode = require("../scrapers/newAddedEpisodes");

const newAddedController = async (req, res) => {
    try {
        const cacheKey = "newadded";

        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            return res.json({
                success: true,
                results: cachedData
            });
        }

        const results = await newAddedEpisode();

        await redis.set(cacheKey, JSON.stringify(results), {
            ex: 5000
        });

        res.json({
            success: true,
            message: "Data Found!!",
            results
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
};

module.exports = newAddedController;
