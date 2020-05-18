const express =require('express')
const router =express.Router();
const Product =require('../models/ProductModel');

//getting all
router.get('/getAll',(req,res)=>{
    const abt=Product.find().then(
        product=>{
            res.send(product)
        }
    )
});
router.get('/getByName/:name',(req,res)=>{
    const abt=Product.find({
        name:req.params.name
    }).then(
        product=>{
            res.send(product)
        }
    )
});
router.post('/add', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.send(product);
    } catch (err) {
        res.status(500).send(err);
    }
});



//
module.exports = router;
