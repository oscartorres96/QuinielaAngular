const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send('Mi primer Backend')
})

app.post('/guardarArchivo', function (req, res) {
  const x = req.body.nombre;

  res.json({
    res: `Welcome ${x}`
  })
  })

app.listen(3000)


