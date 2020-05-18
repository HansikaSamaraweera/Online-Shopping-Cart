const mongoose=require('mongoose');
let ProductModel;
ProductModel = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    }
});

 module.exports = ProductModel = mongoose.model('Product',ProductModel,'Product')
