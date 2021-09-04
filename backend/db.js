const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/inotebook'

const connectToMongo = async () => {
    mongoose.connect(
        mongoURI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        },
        () => {
            console.log(`Connected to MongoDB - ${mongoURI}`.cyan.bold)
        }
    )
}

module.exports = connectToMongo
