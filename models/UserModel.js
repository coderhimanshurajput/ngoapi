'use strict';

const
    path = require('path'),
    mongoose  =  require('mongoose'),
    dataSchema =  mongoose.Schema;

let UserD =  new dataSchema({
   User_name :{
       type : String,
       require : true
   },
    User_address :{
       type: String,
        require: true
    },
    User_email :{
       type : String,
        require : true
    },
    User_mobile:{
       type : String,
        require : true
    },
    User_pass : {
       type : String,
        require : true
    },
    User_img : {
       type: String,
        require : true
    }
});

module.exports =  mongoose.model('userModel',UserD)