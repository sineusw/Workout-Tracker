const router = require("express").Router()
const Workout = require("../models/workout")
router.post("/api/workouts", async function(req, res){
    try {
       const workout = await Workout.create(req.body)
       res.send(workout)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.put("/api/workouts/:id", async function(req, res){
    console.log(req.body)
    try {
       
        const workout = await Workout.updateOne({_id: req.params.id}, {
            exercises: [req.body]
        } )
       
        // workout.exercises = [...workout.exercises, req.body]; 
       res.send(workout)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


router.get("/api/workouts", async function(req, res){
try {
    const workouts = await Workout.find()
    res.send(workouts)
} catch (error) {
    res.status(400).send(error)
}

})

router.get("/api/workouts/range", async function(req, res){
    try {
        const workouts = await Workout.find()
        res.send(workouts)

    } catch (error) {
        res.status(400).send(error)

    }
})

module.exports = router