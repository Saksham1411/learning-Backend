require('dotenv').config();

const connectDB = require('./db/connect');
const product = require('./models/product');
const Product = require('./models/product');

const jsonProducts = require('./products.json');


const start = async () => {
    try {
        console.log('start!!');
        await connectDB(process.env.MONGO_URI);
        console.log('sucesss!!');
        await product.deleteMany(); //remove all the data
        await product.create(jsonProducts); //remove all the data
        console.log('added');
    } catch (error) {
        console.log(error);
    }
}

start();