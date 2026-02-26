const app = require("./src/app.js")
app.use("/",()=>{console.log("Api is live"})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
