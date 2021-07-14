const mongoose = require("mongoose")
const workoutSchema = mongoose.Schema({
    date: {
        type: Date, 
        required: true,
        default: Date.now()
    },

    exercises: [
        // {
        // type: String,
        // name: String,
        // duration: Number,
        // weight: Number,
        // reps: Number,
        // sets: Number,
        // distance: Number,
        // }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout 

// type: 'resistance',
// name: 'Bicep Curl',
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4,