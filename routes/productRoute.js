const express = require('express');
const { getProducts,getProduct,postProduct,updateProduct,deleteProduct } = require('../controllers/productController');
const router = express.Router();

// For Getting all of the products
router.get("/", getProducts);

// For Getting a specific Product
router.get("/:id", getProduct);

// For uploading a product
router.post("/" , postProduct);

// For Updation of a product
router.put("/:id", updateProduct);

//For deleting a product
router.delete("/:id", deleteProduct);

module.exports = router;