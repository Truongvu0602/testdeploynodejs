const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("đã deploy đc ở render");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}}`);
});
