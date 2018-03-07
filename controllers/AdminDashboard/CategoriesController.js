'use strict';
const
    path = require('path'),
    async = require('async'),
    _     = require ('lodash'),
    mongoose = require('mongoose');

var AddCategories = require('../../models/CategoriesModel');

exports.CreateCategories = function (req, res) {
     let data= req.body;
     // console.log('data');
     // process.exit();
       let Categories = {
        Category : data.Category,
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
            res.json({obj: saveObj, message: 'Data is saved Successfully'});
        }
    });
 }
