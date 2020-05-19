const express =require('express')
const router =express.Router();
const Product =require('../models/ProductModel');
const History=require('../models/HistoryModel');

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
        category:req.params.name
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
router.post('/addhistory', async (req, res) => {
    const history = new History(req.body);
    try {
        await history.save();
        res.send(history);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.get('/gethistory',(req,res)=>{
    const abt=History.find().then(
        history=>{
            res.send(history)
        }
    )
});
router.delete('/delete/:id',(req,res)=>{
    History.findById(req.params.id).then(xx=>{
        if(xx){
            xx.remove();
            res.send("deleted successfully");
        }else{
            res.send('invalid');
        }
        }

    )
});






//
module.exports = router;
