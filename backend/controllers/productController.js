import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';


//@desc   Fetch all products
//@route  GET /api/products
//@access Public
const getProducts=asyncHandler(async (req,res)=>{
    const products=await Product.find({})
    res.json(products)
})


//@desc   Fetch a product
//@route  GET /api/products/:id
//@access Public
const getProductById=asyncHandler(async (req,res)=>{
    //const product=products.find((p)=>p._id===req.params.id);
    const product=await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404);
        throw new Error('Product not found');
    }

    // res.status(404).json({message:'product not found'})
    
})

export {getProducts,getProductById}