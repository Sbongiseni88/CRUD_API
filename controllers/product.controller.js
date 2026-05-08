import Product from "../models/product.model.js";

export const getProducts= async(req,res)=>{

    try{
        const products = await Product.find({})
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getProduct= async (req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message:err.message})
    }
};

export const createProduct = async (req,res)=>{
    try{
        const product =  await Product.create(req.body);
        res.status(200).json(product);

   }catch(err){
    res.status(500).json({message:err.message})
   }
};

export const updateProduct = async(req,res)=>{
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
};

export const deleteProduct = async (req,res)=>{
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
};