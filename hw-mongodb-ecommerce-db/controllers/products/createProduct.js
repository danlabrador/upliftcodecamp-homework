import { overwriteDataInStorage, parseDataFromStorage } from '../../util/manageDataJson.js';
import { randomUUID } from 'crypto';
import Product from '../../models/products.model.js'

const validateBody = (req, res, properties) => {
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
    return false;
  }

  // Handle missing required attributes
  if (!title || !category || !price) {
    const results = {
      error: 'Bad Request',
    }

    if (!title && !category && !price) {
      results.message = 'You need to pass a request body with the following required attributes: title, category, price.'
    } else {
      const missingAttributes = []
      !title && missingAttributes.push('title');
      !category && missingAttributes.push('category');
      !price && missingAttributes.push('price');
      results.message = `You have missing required attributes: ${missingAttributes.join(', ')}`
    }

    res.status(400).send(results);
    return false;
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
    return false;
  }

  return true;
}

const createProduct = async (req, res) => {
  try {
    const {
      title = undefined,
      price = undefined,
      description = undefined,
      category = undefined,
      image = undefined,
      rating = undefined
    } = req.body;

    // Validate request body
    const isBodyValid = validateBody(req, res);
    if (!isBodyValid) {
      return;
    }

    // Handle valid body
    const newProduct = new Product({
      title, price, description, category, image, rating
    })

    await newProduct.save();

    res.status(201).send({
      message: "Product created.",
      data: newProduct
    })

  } catch (e) {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error creating product."
    });

    console.log(e)
  }
};

export default createProduct;
