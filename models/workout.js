var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: 
        [
          {
            _id: Schema.Types.ObjectId,
            name: {
              type: String,
              required: true
          },
          duration: {
              type: Number,
              required: true
          },
          distance: {
              type: Number,
              default: 0
          },
          weight: {
              type: Number,
              default: 0
          },
          reps: {
              type: Number,
              default: 0
          },
          sets: {
              type: Number,
              default: 0
          }
        }
      ],
    
    totalDuration: {
      type: Number
    }
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