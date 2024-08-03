const express = require("express");
const bodyParser = require("body-parser");
const route = express();

route.use(bodyParser.json());

route.get("/", async (req, res) => {
  res
    .status(200)
    .json({ message: "This is route url, after deploy success1111" });
});

route.get("/final", async (req, res) => {
  res.status(200).json({ message: "This is final testing, Now Done " });
});

route.get("/health", async (req, res) => {
  res
    .status(200)
    .json({ message: "This is health check, after deploy success 111 333" });
});

route.listen(3003, () => {
  console.log(
    "Server is running on port 3003, this is testing after depployemnt"
  );
});
