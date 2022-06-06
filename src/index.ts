/**
 * Node.js + PostgreSQL boilerplate by Murtaza Bharmal
 */
const env = require('dotenv').config()
const express = require('express')
const ApiRoutes = require('./routes/app.ts')

const port = Number(process.env.PORT || 3001)
const app = express()

app.use(express.json())
app.use('/api', ApiRoutes)

    app.listen(port, () =>
    console.log(`Listening on ws://localhost:${port}`)
);
