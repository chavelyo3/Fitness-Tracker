const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();
const path = require("path");

const db = require("./models");

const app = express();
const PORT = process.env.port || 3000;
const host = process.env.HOST;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
require("./routes/htmlRoutes.js")(app);
require("./routes/Api.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;
