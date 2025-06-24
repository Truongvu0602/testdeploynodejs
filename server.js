const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("đã deploy đc ở render");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
