'use strict';

const
    path= require('path'),
    mongoose = require('mongoose'),
    dataSchema = mongoose.Schema;

let Privacy = new dataSchema({
    Privacy:{
       type : String,
       require : true
   }

});

module.exports = mongoose.model('PrivacyModel', Privacy)