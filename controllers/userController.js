var express = require('express')

const login = (req, res, next) => {
     res.json({message: 'success'})
}

const getUser = (req, res) => {
     let response = {
          username: "testuser",
          email: "user@test.com",
          firstName: "John",
          lastName: "Doe",
          sex: "male",
          role: "admin"
     }
     res.json(response);
};

module.exports = {getUser, login};