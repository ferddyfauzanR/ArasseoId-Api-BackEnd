const express = require("express")
const app = express();
const port = 8002;
const cors = require('cors');
const bodyParser = require('body-parser')
const categoryRoute = require('../routes/categoryRoute')
const productRoute = require('../routes/productRoute')
const authController = require('../routes/authRoute')




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(categoryRoute);
app.use(productRoute);
app.use(authController);




app.listen(port, console.log(`Server Success Running On Port http://localhost:${port}`))