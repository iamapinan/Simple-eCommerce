const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const passport = require("passport")
const ExtractJwt = require("passport-jwt").ExtractJwt
const JwtStrategy = require("passport-jwt").Strategy
const constant = require('../configs/constants')

app.use(bodyParser.json())

var options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = constant.secretKey;

// Validate token
passport.use(new JwtStrategy(options, (payload, done) => {
    if(payload.sub === "user@test.com") done(null, true)
    else done(null, false)
}))

const verifyToken =  passport.authenticate('jwt', { session: false })

const loginMiddleware = (req, res, next) => {
    if(req.body.email === "user@test.com" && req.body.password === "testpass") 
        next();
    else 
        res.status(401).json({ message: "unauthorized" })
}

module.exports = {
    loginMiddleware,
    verifyToken
}