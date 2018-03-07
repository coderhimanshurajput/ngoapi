'use strict';

const
    path = require('path'),
    mongoose = require('mongoose'),
    dataSchema = mongoose.Schema;

let Tac = new dataSchema({
    Termandcondition:{
        type: String,
        require : true
    }
});

module.exports = mongoose.model('TacModel',Tac)