import { overwriteDataInStorage, parseDataFromStorage } from '../../util/manageDataJson.js';
import { randomUUID } from 'crypto';

const updateProduct = (req, res) => {
  try {
    let { products } = parseDataFromStorage();
    const productId = req.params.id;
    const requestedProduct = products.find(product => product.id === productId);

    // Handle missing body
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).send({
        error: "Bad Request",
        message: "You need to pass a request body."
      });
      return;
    }

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
      res.status(400).send({
        error: 'Bad Request',
        message: `You have passed disallowed attributes: ${disallowedAttributes.join(', ')}`
      });
      return;
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
      res.status(400).send({
        error: 'Bad Request',
        message: 'Incorrect data type passed for one or more attributes.'
      });
      return;
    }

    // Update product
    const productToBeUpdated = products.find((product) => product.id === productId);
    for (let key of Object.keys(req.body)) {
      productToBeUpdated[key] = req.body[key];
    }

    products = products.map(product => {
      if (product.id === productId) {
        return {
          id: productId,
          ...productToBeUpdated
        }
      } else {
        return product
      }
    })

    overwriteDataInStorage(products, 'products');
    res.status(200).send({
      message: 'Product updated.',
      data: productToBeUpdated
    });
    return;

  } catch (e) {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error updating product."
    });

    console.log(e)
  }
};

export default updateProduct;
