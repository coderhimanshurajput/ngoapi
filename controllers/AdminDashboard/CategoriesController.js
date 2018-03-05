'use strict';

const
    path = require('path'),
    async = require('async'),
    _  = require ('lodash'),
    mongoose = require('mongoose');

var AddCategories = require(path.resolve(`./models/CategoriesModel`));
var config = require(path.resolve('./config/config'));


 exports.CreateCategories = function (req, res, next) {
     let data= req.body;

       let Categories = {
        Addcategory : data.Addcategory,
        File : data.File,
        Description: data.Description
    };
    console.log(Categories);

    let AddCat = new AddCategories(Categories);
    AddCat.save(function (err, saveObj) {
        console.log('AddCat');
        if(err){
            res.json({obj: err, message: 'Data Is not Saved'});
        }
        else {
            res.json({obj: saveObj, message: 'Data is saved successfully'});
        }
    });
 }




