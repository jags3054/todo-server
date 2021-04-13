const mongoose = require('mongoose');
//const db = "mongodb://localhost:27017/mytodoapp";
const db = "mongodb+srv://patilj922:patil123@cluster0.ye4qg.mongodb.net/mytodoapp?retryWrites=true&w=majority";
mongoose.connect(db, ({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }))
    .then(console.log('connected to mongodb'))
    .catch(err => console.log(err))


module.exports = db;