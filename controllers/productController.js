var express = require('express')
var productModels = require('../models/productModels')

const getProducts = (req, res, next) => {
    let products = productModels.list()
    res.json({message: "success", "products": products})
}

const createProducts = (req, res, next) => {
    res.json(req)
}

module.exports = {
    getProducts, 
    createProducts
};