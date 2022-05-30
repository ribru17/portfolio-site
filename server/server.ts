import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'

dotenv.config({path: __dirname + './../../.env'}) // starts from 'dist' folder
const PORT = process.env.PORT || 8000
const app = express()

const apiRouter = express.Router()
const mainRouter = express.Router()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../client/build')))

app.post('/api/hello', (req, res) => {
    console.log("hi there")
    res.end()
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})