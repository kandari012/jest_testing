const express = require("express");
const app = express();
const port = 3000;
const asset = require("./controller/asset");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/asset", asset.getData);

app.post("/asset", asset.getData);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
