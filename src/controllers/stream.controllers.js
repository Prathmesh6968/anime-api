const toonStream = require("../scrapers/streams/ToonStream.js");

const toonstreamController = async (req, res) => {
    try {
        const { id, season, ep } = req.query;

        if (!id || !season || !ep) {
            return res.status(400).json({
                success: false,
                message: "Missing required query parameters (id, season, ep)"
            });
        }

        const results = await toonStream(id, season, ep) || [];

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found!!",
                results: []
            });
        }

        return res.status(200).json({
            success: true,
            message: "Data Found!!",
            results
        });

    } catch (err) {
        console.error("Controller Error:", err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = toonstreamController;