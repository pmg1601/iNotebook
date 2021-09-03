const connectToMongo = require('./db.js')
const express = require('express')
const colors = require('colors')

const auth = require('./routes/auth.js')
const notes = require('./routes/notes.js')

/* --------------------------- Connect to mongoDB --------------------------- */
connectToMongo()

/* ------------------------ Initialize express server ----------------------- */
const app = express()
const PORT = 3000

// Available routes
app.get('/', (req, res) => {
    res.send('Server Runnning!')
})

app.use('/api/auth', auth)
app.use('/api/notes', notes)

app.listen(PORT, () => [
    console.log(`\nServer Running at http://localhost:${PORT}`.green.bold)
])
