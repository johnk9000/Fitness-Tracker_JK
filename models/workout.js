var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ],
    
    totalDuration: Number,
})

WorkoutSchema.methods.getDuration = () => {
  for(i = 0; i < this.exercises.length; i++) {
  let sum = 0;
  sum +=  this.exercises[i].duration
  }
    console.log("total duration of workout", sum)
  this.totalDuration = sum

  return this.totalDuration
}

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout