
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/usrer', userRoute)

app.get('/', (req, res, next) => {
    res.json("message hellos")
})





const PORT = process.env.PORT || 4002

app.listen(PORT, () => {
    console.log(`Server is Running On Port ${PORT}`)

})