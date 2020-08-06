var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ]
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout