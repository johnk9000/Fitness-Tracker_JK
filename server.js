const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 8080

var db = require("./models")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// CXN to Mongoose =========
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

// HTML Routes ===================================================================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
  });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
  });

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
  });

// API Routes ====================================================================================

app.get("/api/workouts", (req, res) => {
        console.log("/api/workouts" + req) // DEL
    db.Workout.find({})
    //.populate("exercises")
    .then(dbWorkout => { res.json(dbWorkout) })
})

// app.get("/api/workouts/:id", (req, res) => {
//         console.log("/api/workouts: " + id + " | " + req) // DEL
//     db.Workout.find({ _id: objectId(req.params.id) })
//     .then( dbWorkout => { res.json(dbWorkout) })
//     .catch( err => { res.json(err) })
// })

app.get("/api/exercise", (req, res) => {
        console.log("/api/workouts" + req)  // DEL
    db.Exercise.find({})
    .then( dbExercise => { res.json(dbExercise) })
    .catch( err => { res.json(err) })
});
// Add an exercise regiment to the Workouts Schema
app.post("/api/workouts", (req, res) => {
  console.log("POST /api/workouts" + req)  // DEL
    db.Exercise.create(req.body)
    .then(({ _id }) => { db.Workout.findOneAndUpdate({}, {$push: {exercise: _id}}, {new: true}) })
    .then( dbExercise => { res.json(dbExercise) })
    .catch( err => { res.json(err) })
})

app.get("/api/exercise/:id", (req, res) => {
        console.log("/api/exercises: " + id + " | " + req)  // DEL
    db.Exercise.find({ _id: objectId(req.params.id) })
    .then(dbExercise => { res.json(dbExercise) })
    .catch(err => { res.json(err) })
});

// App Init ==========================================================
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });