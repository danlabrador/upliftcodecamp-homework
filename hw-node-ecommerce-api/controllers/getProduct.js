const getProduct = ({ request, response, jsonDataPath, jsonData }) => {
  const productId = parseInt(request.url.split('/')[4]);
  const requestedProduct = jsonData.products.find((product) => product.id === productId)

  if (requestedProduct) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      message: 'Product found.',
      data: requestedProduct
    }));
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      error: 'Not Found',
      message: `Product with the ID ${productId} does not exist.`
    }));
  }

  return null;
}

module.exports = getProduct;