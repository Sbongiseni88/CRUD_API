import express from 'express';
import Product from '../models/product.model.js';
const router = express.Router();
import {getProducts,getProduct,createProduct,updateProduct,deleteProduct} from '../controllers/product.controller.js'

//controller function
router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;