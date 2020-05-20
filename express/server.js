const dbUrl="mongodb+srv://admin:1234@cluster0-6qzt7.mongodb.net/test?retryWrites=true&w=majority";

const express = require('express');
const app=express();

const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

/*mongoose.connect('mongodb://localhost/customerDB',{useNewUrlParser:true})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('connected to database'))*/

app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(dbUrl,{useNewUrlParser:true,useFindAndModify:false,dbName: 'customerDB'})
    .then(()=>console.log("Mongo db connected"))
    .catch(err=>console.log(err));

const productrouter = require('./routes/Product.js')

app.use('/expressapi',productrouter)

app.listen(3500,()=>console.log('server started'))





