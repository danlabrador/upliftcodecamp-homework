const fs = require('fs');

const updateProduct = ({ request, response, jsonDataPath, jsonData }) => {
  let hasBody = false;

  request.on('data', (chunk) => {
    hasBody = true;
    const body = JSON.parse(chunk);

    // Handle invalid id format
    const productId = parseInt(request.url.split('/')[4]);
    if (!productId || typeof productId !== 'number') {
      const results = {
        error: 'Bad Request',
        message: 'You need to pass an integer product ID.'
      }
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
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
    } = body;

    const disallowedAttributes = Object.keys(otherAttributes);
    if (disallowedAttributes.length > 0) {
      const results = {
        error: 'Bad Request',
        message: `You have passed disallowed attributes: ${disallowedAttributes.join(', ')}`
      };
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
      return;
    }

    // Handle missing attributes
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
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
      return;
    }


    // Handle incorrect data types
    if (title !== undefined && typeof title !== 'string' ||
      price !== undefined && typeof price !== 'number' ||
      description !== undefined && typeof description !== 'string' ||
      category !== undefined && typeof category !== 'string' ||
      image !== undefined && typeof image !== 'string') {

      const results = {
        error: 'Bad Request',
        message: 'Incorrect data type passed for one or more attributes.'
      };
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
      return;
    }


    // Handle non-existent product
    const requestedProduct = jsonData.products.some((product) => product.id === productId)
    if (!requestedProduct) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        error: 'Not Found',
        message: `Product with the ID ${productId} does not exist.`
      }));
      return;
    }

    // Update product - Since method is PUT, product is replaced with a fresh new object, which is the one passed from the body.
    jsonData.products = jsonData.products.map(product => {
      if (product.id === productId) {
        return {
          id: productId,
          ...body
        }
      } else {
        return product
      }
    })

    fs.writeFileSync(jsonDataPath, JSON.stringify(jsonData));
    const updatedProduct = jsonData.products.find((product) => product.id === productId)

    const results = {
      message: 'Product updated.',
      data: updatedProduct
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(results));
    return;
  })

  request.on('end', () => {
    if (!hasBody) {
      const results = {
        error: "Bad Request",
        message: "You need to pass a request body."
      }
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
    }
    return;
  })
}

module.exports = updateProduct;