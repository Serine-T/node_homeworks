### Run application
npm run dev  

### Testing the API
You can test the creation and updating logic by using Postman. The following API operations are available:

GET: http://localhost:3000/products to fetch all products.
POST: Create a product by sending JSON data to http://localhost:3000/products.
PUT: Update a product's address with http://localhost:3000/products/:id.
DELETE: Soft delete a product using http://localhost:3000/products/:id.