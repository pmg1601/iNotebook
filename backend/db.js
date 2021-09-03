import mongoose from 'mongoose'
import colors from 'colors'

const mongoURI = 'mongodb://localhost:27017/inotebook'

const connectToMongo = async () => {
    mongoose.connect(
        mongoURI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        () => {
            console.log(`Connected to MongoDB - ${mongoURI}`.cyan.bold)
        }
    )
}

export default connectToMongo
