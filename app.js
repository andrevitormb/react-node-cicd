const express = require('express')
const app = express()
const port = 5000

app.get('/names', (req, res) => res.send('Andre'))
app.listen(port, () => console.log(`App is running on port ${port}!`))