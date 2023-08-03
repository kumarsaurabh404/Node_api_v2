require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
var cors = require('cors');

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.use(cors());


//Product Routes
app.use('/api/product', productRoute);
// Product Route

app.get("/", (req, res) => {
  res.send('hello');
});
app.get("/blog", (req, res) => {
  res.send("Hello Blog gg");
});

app.use(errorMiddleware);

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URL).then(() =>{
    app.listen(PORT, () => {
        console.log(`Node running on port ${PORT}`);
    });
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
});
