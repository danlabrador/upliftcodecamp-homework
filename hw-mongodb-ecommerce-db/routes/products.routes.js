import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
