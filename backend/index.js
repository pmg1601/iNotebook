import connectToMongo from './db.js'
import express from 'express'
// import colors from 'colors'

/* --------------------------- Connect to mongoDB --------------------------- */
connectToMongo()

/* ------------------------ Initialize express server ----------------------- */
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Server Runnning!')
})

app.listen(PORT, () => [
    console.log(`\nServer Running at http://localhost:${PORT}`.green.bold)
])
