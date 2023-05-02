const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const chefData = require("./data/chefData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef data are loading");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
