const express = require('express')
const app = express()
const { PORT = 3050 } = process.env

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`client server listening on port ${PORT}!`)
})