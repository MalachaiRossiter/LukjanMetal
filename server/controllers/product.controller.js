const Product = require('../models/product.model');

//creates new Product in database
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
}

//gets all of the Products from the databse
module.exports.getAllProducts = (req,res) => {
    Product.find({})
    .then(products => {
        console.log(products);
        res.json(products);
    })
    .catch(err => res.status(400).json(err));
}

//finds a singular Product by id
module.exports.getProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
}

//finds by keyword
module.exports.getProductKeyword = (req,res) => {
    Product.find({type: req.params.keyword})
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
}

//updates a Product in databse by id
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then(updatedproduct => res.json(updatedproduct))
    .catch(err => res.status(400).json(err));
}

//deletes a Product by its id
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.status(400).json(err));
}