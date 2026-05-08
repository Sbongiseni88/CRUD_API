import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js'
import productRoute from './routes/product.route.js';

const app= express();
const PORT= 3000;
app.use(express.json())//middleware
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute)


app.get('/', (req,res)=>{
    res.send("Hello from node Api server");
});



app.get('/api/products/:id', async (req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});








mongoose.connect("mongodb+srv://sbosh88dubazane_db_user:SBH55springs@expressdb.hehk9nu.mongodb.net/Node-API?appName=expressDB")
.then(()=>{
    console.log('Connected to database');
    app.listen(PORT,()=>{
    console.log('Server is running on port: '+PORT);
});
})
.catch((err)=>{
    console.log("failed to connect to database",err);
});