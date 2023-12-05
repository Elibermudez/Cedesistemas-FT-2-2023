const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const cors = require ("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// conn

require("./conn/conn.mongo")

//modules

app.use("/users", require("./modules/users/users.routes"))
app.use("/companies", require("./modules/companies/utils/companies.routes"))
app.use("/events", require("./modules/events/events.routes"))

app.listen(port, () => {

    console.log(`App running on port ${port}`)

})

