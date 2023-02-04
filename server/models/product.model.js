const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "please provide a product title"], minLength: [3, "name of product must be at least 3 characters long"]},
    type: {type: String, required: [true, "please provide a product type"], minLength: [3, "type of product must be at least 3 characters long"]},
    description: {type: String, required: [true, "please provide a product description"], minLength: [3, "description of product must be at least 3 characters long"]},
    imagePath: {type: String, required: [true, "please provide a product image"]},
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);