import { overwriteDataInStorage, parseDataFromStorage } from '../../util/manageDataJson.js';

const deleteProduct = (req, res) => {
  try {
    const { products } = parseDataFromStorage();
    const productId = req.params.id;
    const hasProduct = products.some(product => product.id === productId);

    if (typeof productId !== 'string') {
      res.status(400).send({
        error: 'Bad Request',
        message: 'Product ID needs to be in UUID format.'
      })
      return;
    }

    if (!hasProduct) {
      res.status(404).send({
        error: 'Not Found',
        message: 'Product with the ID provided does not exist.'
      })
      return;
    }

    const filteredProducts = products.filter(product => product.id !== productId);
    overwriteDataInStorage(filteredProducts, 'products');
    res.status(204).send()
  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving product."
    });
  }
};

export default deleteProduct;
