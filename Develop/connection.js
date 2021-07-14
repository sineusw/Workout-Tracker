// WHhpbacgI7XXvfTO
const mongoose = require("mongoose")
// const connectionParams = { useNewUrlParser: true,  useCreateIndex: true,  useUnifiedTopology: true }
// const url = `mongodb+srv://winsor:WHhpbacgI7XXvfTO@cluster0.xbs3m.mongodb.net/fitnessTracker?retryWrites=true&w=majority`; 
// const connection = mongoose.connect(url, connectionParams).then(()=> {console.log('Connection established')}).catch(err => console.log(err))

module.exports = mongoose.connect('mongodb://localhost:27017/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to mongdb server')
})


// module.exports = connection