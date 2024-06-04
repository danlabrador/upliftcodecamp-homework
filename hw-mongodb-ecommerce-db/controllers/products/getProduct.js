import Product from '../../models/products.model.js';
import { Types } from 'mongoose';

/**
 * Retrieves a single product from the database.
 * 
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The product retrieved from the database.
 */
const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if ID is in valid format
    if (!Types.ObjectId.isValid(productId)) {
      res.status(400).send({
        error: 'Bad Request',
        message: 'The provided ID is not valid. ID must be a 24 character hex string, 12 byte Uint8Array, or an integer'
      })
      return;
    }

    // Check if product exists
    const requestedProduct = await Product.findOne({ _id: productId })
    if (!requestedProduct) {
      res.status(404).send({
        error: 'Not Found',
        message: 'Product with the ID provided does not exist.'
      })
      return;
    }

    // Return product
    res.status(200).send({
      message: 'Product found.',
      data: requestedProduct
    })
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: 'Internal Server Error',
      message: 'Error retrieving product.'
    });
  }
};

export default getProduct;
