import mongoose from "mongoose";

const Productschema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,"Product name is required"]
        },
        quantity:{
            type: Number,
            required:true,
            default:0
        },
        price:{
            type: Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:true
        },
    },
        {
            timestamp:true,
        }

);

const Product = mongoose.model('Product',Productschema);

module.exports= Product;