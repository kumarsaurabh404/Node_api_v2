const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
// For Getting all products
const getProducts = asyncHandler(async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(err){
        res.status(500);
        throw new Error(err.message);
    }
});

// For getting a specific product
const getProduct = asyncHandler (async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(err){
        res.status(500);
        throw new Error(err.message);
    }
});

//For uploading a product
const postProduct = asyncHandler(async(req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(err){
        res.status(500);
        throw new Error(err.message);
    }
});

//For updating a product
const updateProduct = asyncHandler(async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            res.status(404).json({message: `Could Not find Any product with id ${id}`});
        }
        const updated = await Product.findById(id);
        res.status(200).json(updated);
    }catch(err){
        res.status(500);
        throw new Error(err.message);
    }
});

//For deleting a product
const deleteProduct = asyncHandler(async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`Could Not find Any product with id ${id}`);
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500);
        throw new Error(err.message);
    }
});

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}
