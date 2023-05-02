const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefData = require("./data/chefData.json");

const featuredFoods = require("./data/featuredFoods.json");

const partners = require("./data/partners.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef data is loading");
});

app.get("/chefdata", (req, res) => {
  res.send(chefData);
});

app.get("/featuredfoods", (req, res) => {
  res.send(featuredFoods);
});

app.get("/partners", (req, res) => {
  res.send(partners);
});

app.listen(port, () => {
  console.log(`chef data is running on port ${port}`);
});
