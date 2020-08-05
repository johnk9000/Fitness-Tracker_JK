const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// HTML Routes ===================================================================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/exercise.html"));
  });

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/stats.html"));
  });
// API Routes ====================================================================================

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });