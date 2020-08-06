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
var db = require("./models")

app.get("/api/workouts", (req, res) => {
        console.log("/api/workouts" + req) // DEL
    db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => { res.json(dbWorkout) })
})

app.get("/api/workouts/:id", (req, res) => {
        console.log("/api/workouts: " + id + " | " + req) // DEL
    db.Workout.find({ _id: req.params.id })
    .then( dbWorkout => { res.json(dbWorkout) })
    .catch( err => { res.json(err) })
})

app.get("/api/exericse/", (req, res) => {
        console.log("/api/workouts" + req)  // DEL
    db.Exercise.find({})
    .then( dbExercise => { res.json(dbExercise) })
    .catch( err => { res.json(err) })
});

app.get("/api/exericse/:id", (req, res) => {
        console.log("/api/exercises: " + id + " | " + req)  // DEL
    db.Exercise.find({ _id: req.params.id })
    .then(dbExercise => { res.json(dbExercise) })
    .catch(err => { res.json(err) })
});

// App Init ==========================================================
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });