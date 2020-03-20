var express = require('express')

const getProducts = ((req, res, next) => {
    products = [
        {
            id: 10001,
            name: "Test product 1",
            description: "very good product",
            price: 1000,
            quantity: 10
        },
        {
            id: 10002,
            name: "Test product 2",
            description: "very good product 2",
            price: 1500,
            quantity: 8
        }
    ]
    
    res.json({message: "success", "products": products})
})

const createProducts = (req, res, next => {
    res.json(req)
})

module.exports = {getProducts, createProducts};