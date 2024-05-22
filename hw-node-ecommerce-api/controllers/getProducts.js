const url = require('url');

const getProducts = ({ request, response, jsonDataPath, jsonData }) => {
  // Get pagination information
  const queryObject = url.parse(request.url, true).query;
  let page = parseInt(queryObject.page);

  if (queryObject.page && isNaN(page)) {
    const results = {
      error: "Bad request",
      message: `Please use a numerical page number`
    }

    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify(results));
    return;
  }

  if (!page) page = 1; // Handle if page is an empty string.
  const limit = Math.min(parseInt(queryObject.limit), 100) || 15;
  const totalPages = Math.ceil(jsonData.products.length / limit)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Handle non-existent negative pages.
  if (page < 1) {
    const results = {
      error: "Not Found",
      message: `The requested page does not exist. The lowest available page with the limit of ${limit} is 1.`
    }

    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify(results));
    return;
  }

  // Handle non-existent pages beyond totalPages
  if (page > totalPages) {
    const results = {
      error: "Not Found",
      message: `The requested page does not exist. The highest available page with the limit of ${limit} is ${totalPages}.`
    }

    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify(results));
    return;
  }

  // Prepare paginated response
  const results = {
    message: "Product list found."
  }
  results.data = jsonData.products.slice(startIndex, endIndex);

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }

  if (endIndex < jsonData.products.length) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  // Send response
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(results));

  return;
}

module.exports = getProducts;