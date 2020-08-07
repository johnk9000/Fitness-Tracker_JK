var mongoose = require("mongoose")
var Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    // name: {
    //     type: String,
    //     required: true
    // },
    // duration: {
    //     type: Number,
    //     required: true
    // },
    // distance: {
    //     type: Number,
    //     default: 0
    // },
    // weight: {
    //     type: Number,
    //     default: 0
    // },

    // reps: {
    //     type: Number,
    //     default: 0
    // },
    // sets: {
    //     type: Number,
    //     default: 0
    // }
    day: {
        type: Date,
        default: Date.now
    },

    exercises: 
        [
          {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ],
    
    totalDuration: {
      type: Number
    }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise