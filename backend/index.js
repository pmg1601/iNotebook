const connectToMongo = require('./db.js')
const express = require('express')
const cors = require('cors')
const colors = require('colors')

const auth = require('./routes/auth.js')
const notes = require('./routes/notes.js')

/* --------------------------- Connect to mongoDB --------------------------- */
connectToMongo()

/* ------------------------ Initialize express server ----------------------- */
const app = express()
const PORT = 5000

// Middlewares
app.use(express.json()) // To access req body
app.use(cors()) // CORS things

// Available routes
app.get('/', (req, res) => {
    res.send('Server API Runnning!')
})

app.use('/api/auth', auth)
app.use('/api/notes', notes)

// Start listening
app.listen(PORT, () => [
    console.log(`\nServer Running at http://localhost:${PORT}`.green.bold)
])
