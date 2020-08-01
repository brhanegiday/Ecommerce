const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");
const app = express();

// body parser middlewre
app.use(bodyParser.json());
// db config
//const db=require('./config/keys').mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
//use route
app.use("/api/items", items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port ${port}"));
