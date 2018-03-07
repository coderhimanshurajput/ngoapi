'use strict';

// import * as buffer from "buffer";

const express = require('express'),
    buffer = require('buffer'),
    fs = require('fs'),
    path = require('path'),
    expressJWT = require('jwt-express'),
    config = require(path.resolve('./config/config')),
    router = express.Router();



module.exports = router ;