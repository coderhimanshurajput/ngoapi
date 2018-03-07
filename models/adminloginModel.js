'use strict';

const
    mongoose = require('mongoose'),
    path =  require('path'),
    dataSchema = mongoose.Schema;

let AdminLogin = new dataSchema({
    Admin_name:{
        type : String,
        require : true
    },
    Admin_user :{
        type: String,
        require: true
    },
    Admin_pass : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('adminloginModel',AdminLogin)
