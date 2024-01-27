const express = require("express")
const port = 8002;
const cors = require('cors')


const app = express();

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, console.log(`Server Success Running On Port http://localhost:${port}`))