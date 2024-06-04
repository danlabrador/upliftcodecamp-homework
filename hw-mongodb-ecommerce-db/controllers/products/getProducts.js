import Product from '../../models/products.model.js';

/**
 * Retrieves the list of products from the database.
 * @param {Object} res - Response object
 * @returns {Object} The list of products retrieved from the database.
 */
const getProducts = async (_, res) => {
  try {
    const products = await Product.find();

    // If no products are found, return an empty array. Note: Still considered a successful request.
    // Indicates that the request was successful, and there are simply no products to display.
    if (!products || products.length === 0) {
      return res.status(200).send({
        message: "No products found.",
        data: []
      });
    }

    return res.status(200).json({
      message: "List of products found.",
      data: products
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving products."
    });
  }
};

export default getProducts;
