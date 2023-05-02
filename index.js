const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");

app.get("/", (req, res) => {
  res.send("Chef data is loading");
});

app.get("/chefdata", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`chef data is running on port ${port}`);
});
