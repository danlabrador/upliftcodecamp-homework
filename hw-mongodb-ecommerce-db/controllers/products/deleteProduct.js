import { Types } from "mongoose";
import Product from "../../models/products.model.js";

/** 
 * Deletes a product from the database.
 * 
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @returns {Object} The response object
*/
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if ID is in valid format
    if (!Types.ObjectId.isValid(productId)) {
      return res.status(400).send({
        error: 'Bad Request',
        message: 'The provided ID is not valid. ID must be a 24 character hex string, 12 byte Uint8Array, or an integer'
      })
    }

    // Check if product exists
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).send({
        error: 'Not Found',
        message: 'Product with the ID provided does not exist.'
      })
    }

    res.status(204).send()
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: "Internal Server Error",
      message: "Error deleting product."
    });
  }
};

export default deleteProduct;
