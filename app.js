const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/names', (req, res) => res.send('Andre'))
app.listen(port, () => console.log(`App is running on port ${port}!`))