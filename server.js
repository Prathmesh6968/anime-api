const app = require("./src/app.js")
const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
