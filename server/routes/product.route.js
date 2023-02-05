const ProductController = require('../controllers/Product.controller');


module.exports = (app) => {
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.get('/api/product/keyword/:keyword', ProductController.getProductKeyword);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}