const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
   const products = await Product.find({}).sort('name');
   // console.log(products);
   res.status(200).json({ nbHits: products.length, products });
}
const getAllProducts = async (req, res) => {
   // console.log(req.query);
   const { featured, company, name, sort, fields } = req.query;
   const queryObject = {};

   if (featured) {
      queryObject.featured = featured === 'true' ? true : false;
   }
   if (company) {
      queryObject.company = company;
   }
   if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
   }
   console.log(queryObject);
   let result = Product.find(queryObject);
   // console.log(result);
   // SORT
   if (sort) {
      const sortList = sort.split(',').join(' ');
      result = result.sort(sortList);
   } else {
      result = result.sort('createdAt');
   }

   // SELECT
   if(fields){
      const selectList = fields.split(',').join(' ');
      result = result.select(selectList);
   }

   // LIMIT 
   const page = Number(req.query.page) || 1;
   const limit = Number(req.query.limit) || 10;
   const skip = (page-1) * limit;

   result = result.skip(skip).limit(limit);

   const products = await result;

   res.status(200).json({ nbHits: products.length, products });
}

module.exports = { getAllProducts, getAllProductsStatic } 