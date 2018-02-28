'use strict';

const  path = require ('path');

const config = {
    db:{
        URL: 'mongodb://localhost/NgoHelp',
        DEBUG: true,
        autoIndex:true,
        log:true
    },
    server:{
        PORT : 3001,
        HOSTNAME: 'http://localhost:3001/'
    }
};

module.exports = config;
