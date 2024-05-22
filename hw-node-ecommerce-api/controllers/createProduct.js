const fs = require('fs');

const createProduct = ({ request, response, jsonDataPath, jsonData }) => {
  let hasBody = false;

  request.on('data', (chunk) => {
    hasBody = true;
    const body = JSON.parse(chunk);

    // Handle disallowed attributes
    const {
      title = undefined,
      price = undefined,
      description = undefined,
      category = undefined,
      image = undefined,
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

    // Prepare response
    const id = ++jsonData.lastId; // Get the ID and increment lastId of data.json
    const newProduct = { id, title, price, description, category, image }
    jsonData.products.push(newProduct);

    // Update jsonData and send response
    fs.writeFileSync(jsonDataPath, JSON.stringify(jsonData));
    const results = {
      message: 'Product added.',
      data: newProduct
    }
    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(results));
  })

  // Handle request with no body.
  request.on('end', () => {
    if (!hasBody) {
      const results = {
        error: "Bad Request",
        message: "You need to pass a request body."
      }
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify(results));
    }
  })

  return;
}

module.exports = createProduct;