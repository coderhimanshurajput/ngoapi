'use strict';

const
    path = require('path'),
    async = require('async'),
    _ = require ('lodash'),
    mongoose = require('mongoose');

var AddCategories = require(path.resolve(`./models/CategoriesModel`));


 exports.CreateCategories = function (req, res, next) {

       let Categories = {
        addcategory : req.body.addcategory,
        file : req.body.file,
        description: req.body.description
    };
    console.log(Categories);

    let AddCat = new AddCategories(Categories);

    AddCat.save(function (err, saveObj) {
        console.log('Addcatdet');
        if(err){
            res.json({obj: err, message: 'Data Is not Saved'});
        }
        else {
            res.json({obj: saveObj, message: 'Data is saved successfully'});
        }
    });
 }




