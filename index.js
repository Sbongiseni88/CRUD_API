import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js'

const app= express();
const PORT= 3000;
app.use(express.json())//middleware
app.use(express.urlencoded({extended:false}))




app.get('/', (req,res)=>{
    res.send("Hello from node Api server");
});

app.get('/api/products', async (req,res)=>{
    try{
        const products= await Product.find({});
        res.status(200).json(products)

    }catch(err){
        res.status(500).json({message: err.message})
    }
})

app.get('/api/product/:id', async (req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});


app.post('/api/products',async (req,res)=>{
   try{
        const product =  await Product.create(req.body);
        res.status(200).json(product);

   }catch(err){
    res.status(500).json({message:err.message})
   }
});

//update product  api
app.put('/api/product/:id', async (req,res)=>{
    try{
        const {id}= req.params;
        const product= await Product.findByIdAndUpdate(id, req.body,{new:true});
        if (!product){
            return res.status(404).json({message:"Product not found"})
        }
        const updatedProduct= await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(err){
        res.status(500).json({message: err.message});


    }


});

//delete product
app.delete('/api/product/:id', async (req,res)=>{
    try{
        const {id}= req.params;
        const product= await Product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({message:'product not found'});
        }
        res.status(200).json({message:'Producct deleted successfuly'})

    }catch(err){
        res.status(500).json({message: err.message})
    }
})


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