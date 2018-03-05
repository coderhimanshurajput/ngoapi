'use strict';

const
    mongoose  = require('mongoose'),
    path = require('path'),
    dataSchema = mongoose.Schema;

let AddCategories  = new dataSchema({
   addcategory:{
       type : String,
       require : true
   },
   file : {
       type : String,
       require : true
   },
    description : {
       type: String,
        require : true
    }
});
let addcat = mongoose.model('CategoriesModel',AddCategories);

module.exports = addcat;

