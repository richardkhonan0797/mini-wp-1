require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3000
const { errorHandler } = require('./middlewares/errorHandler')
const router = require('./routes/index')
mongoose.connect('mongodb://localhost/mini-wordpress', {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',router)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})