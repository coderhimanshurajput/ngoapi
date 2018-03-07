'use strict';
const
    mongoose  = require('mongoose'),
    path = require('path'),
    dataSchema = mongoose.Schema;

let AddCategories  = new dataSchema({
    Category:{
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


module.exports = mongoose.model('CategoriesModel',AddCategories );