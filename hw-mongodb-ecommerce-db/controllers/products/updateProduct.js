import { Types } from 'mongoose';
import Product from '../../models/products.model.js';

/**
 * Validates the request body.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The object to send.
 */
const validateBody = (req, res) => {
  // Handle disallowed attributes
  const {
    title = undefined,
    price = undefined,
    description = undefined,
    category = undefined,
    image = undefined,
    rating = undefined,
    ...otherAttributes
  } = req.body;

  const disallowedAttributes = Object.keys(otherAttributes);
  if (disallowedAttributes.length > 0) {
    return {
      error: 'Bad Request',
      message: `You have passed disallowed attributes: ${disallowedAttributes.join(', ')}`
    }
  }

  // Handle invalid format
  const isTitleInvalid = title !== undefined && typeof title !== 'string';
  const isPriceInvalid = price !== undefined && typeof price !== 'number';
  const isDescriptionInvalid = description !== undefined && typeof description !== 'string';
  const isCategoryInvalid = category !== undefined && typeof category !== 'string';
  const isImageInvalid = image !== undefined && typeof image !== 'string';
  const isRatingInvalid = rating !== undefined && (typeof rating !== 'object' ||
    typeof rating.rate !== 'number' ||
    typeof rating.count !== 'number')
  const hasInvalidDataType = isTitleInvalid || isPriceInvalid || isDescriptionInvalid || isCategoryInvalid || isImageInvalid || isRatingInvalid;

  if (hasInvalidDataType) {
    return {
      error: 'Bad Request',
      message: 'Incorrect data type passed for one or more attributes.'
    };
  }

  return null;
}


/**
 * Update a product in the database.
 * 
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The updated product.
 */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if ID is in valid format
    if (!Types.ObjectId.isValid(productId)) {
      return res.status(400).send({
        error: 'Bad Request',
        message: 'The provided ID is not valid. ID must be a 24 character hex string, 12 byte Uint8Array, or an integer'
      });
    }

    // Check if product exists
    const requestedProduct = await Product.findById(productId);
    if (!requestedProduct) {
      return res.status(404).send({
        error: 'Not Found',
        message: 'Product with the ID provided does not exist.'
      });
    }

    // Handle missing body
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send({
        error: "Bad Request",
        message: "You need to pass a request body."
      });
    }


    // When request body exists, validate it.
    const errorResponse = validateBody(req, res);
    if (errorResponse) {
      return res.status(400).send(errorResponse);
    }

    // Update product
    const productToBeUpdated = await Product.findById(productId);
    for (let key of Object.keys(req.body)) {
      productToBeUpdated[key] = req.body[key];
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, productToBeUpdated, { new: true });

    return res.status(200).send({
      message: 'Product updated.',
      data: updatedProduct
    });

  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: "Internal Server Error",
      message: "Error updating product."
    });
  }
};

export default updateProduct;
