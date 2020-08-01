const express = require("express");
const app = express();
template = require("./temlate");

app.get("/", (req, res) => {
  res.status(200).send(template());
  console.log(req.url);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port '${port}'"));
