const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3006



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var routes = require('./backend/routes/index')
var users = require('./backend/routes/users')

var app = express();


//view engine
app.set('views', path.join)
app.engine('handlebars',)
app.set('view engine', 'handlebars')

//bodyparser middleware
app.use(bodyParser.json())
