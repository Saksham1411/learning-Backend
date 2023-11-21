require('dotenv').config();
require('express-async-errors');


const express = require('express');
const connectDB = require('./db/connect.js');
const productRouter = require('./routes/products.js');

const notFound = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error-handler.js');

const app = express();
// middleware
app.use(express.json());

// routes

app.use('/api/v1/products',productRouter);


// product routes

app.use(notFound);
app.use(errorMiddleware);
const port = process.env.PORT || 3000

const start = async () => {
    try {
        console.log('start');
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log('server is runing'))
    } catch (error) {

    }
}

start();