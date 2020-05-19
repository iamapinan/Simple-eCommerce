var express = require('express')
var constant = require('../configs/constants')
var jwt = require("jwt-simple");

const profile = {
     username: "testuser",
     email: "user@test.com",
     firstName: "John",
     lastName: "Doe",
     sex: "male",
     role: "admin"
}

const login = (req, res) => {
     const payload = {
          sub: req.body.email,
          iat: new Date().getTime()
       }
     const secret = constant.secretKey

     res.send(jwt.encode(payload, secret));
}

const getUser = (req, res) => {
     res.json(response);
};

module.exports = {getUser, login};