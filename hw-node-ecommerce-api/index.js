const { createServer } = require('http');
const fs = require('fs');
const path = require('path');
const createProduct = require('./controllers/createProduct');
const getProduct = require('./controllers/getProduct');
const getProducts = require('./controllers/getProducts');
const getQueryParams = require('./util/getQueryParams');
const updateProduct = require('./controllers/updateProduct');

const PORT = 8080;
const baseUrl = '/api/v1';
const productsUrl = `${baseUrl}/products`

// Create server and routes
const server = createServer((request, response) => {
  const jsonDataPath = path.join(__dirname, './data.json')
  const jsonData = JSON.parse(fs.readFileSync(jsonDataPath));
  const method = request.method.toUpperCase();

  const params = { request, response, jsonDataPath, jsonData }

  //* GET /api/v1/products/:id - Returns a single product by its unique identifier.
  if (request.url.startsWith(`${productsUrl}/`) && request.url.split('/')[4] && method === 'GET') {
    getProduct(params);
  }

  //* GET /api/v1/products - Gets the list of products.
  if ((request.url.startsWith(`${productsUrl}`) || request.url.startsWith(`${productsUrl}/`)) && !request.url.split('/')[4] && method === 'GET') {
    getProducts(params);
  }


  //* POST /api/v1/products - Creates a new product
  if ((request.url === `${productsUrl}` || request.url === `${productsUrl}/`) && method === 'POST') {
    createProduct(params);
  }


  //* PUT /api/v1/products/:id - Updates an existing product
  if (request.url.startsWith(`${productsUrl}/`) && request.url.split('/')[4] && method === 'PUT') {
    updateProduct(params);
  }
})

server.listen(PORT, () => console.log('Server is listening at port 8080.'))