const express = require('express')
const path = require('path')

//import routes from directory
const indexRouter = require('./routes')

//Create the app
const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

//make routes available
app.use('/', indexRouter)

let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})