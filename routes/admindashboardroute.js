'use strict';

const express = require('express'),
    fs = require('fs'),
    path = require('path'),
    expressJWT = require('jwt-express'),
    config = require(path.resolve('./config/config')),
    router = express.Router();

const ctrl = {};
fs.readdirSync(path.resolve('./controllers/AdminDashboard')).forEach(file =>{
    const name = file.substr(0, file.indexOf('.'));
    ctrl[name] = require(path.resolve(`./controller/AdminDashboard/${name}`));
});

