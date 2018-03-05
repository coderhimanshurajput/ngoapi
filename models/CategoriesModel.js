'use strict';

const
    mongoose  = require('mongoose'),
    path = require('path'),
    dataSchema = mongoose.Schema;

let AddCategories  = new dataSchema({
    Addcategory:{
       type : String,
       require : true
   },
   File : {
       type : String,
       require : true
   },
    Description : {
       type: String,
        require : true
    }
});

var Addcate = mongoose.model('CategoriesModel',AddCategories);
module.exports = Addcate;
