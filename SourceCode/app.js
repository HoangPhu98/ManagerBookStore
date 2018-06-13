var express = require('express')
var morgan = require('morgan')
var engine = require('ejs-mate')
var path = require('path')

var port = 3300 || process.env.port
var app = express()

app.engine('ejs', engine)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use(express.static(path.join(__dirname, 'public')))


//Routes
var homeController = require("./controllers/home.js")


app.use('/', homeController)



app.listen(3300, () => {
    console.log("Server running at http://localhost:" + port);
})