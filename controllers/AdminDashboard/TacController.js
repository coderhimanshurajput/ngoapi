'use strict';

const
    path = require('path'),
    async  = require('async'),
    _ = require('lodash'),
    mongoose = require('mongoose');

let Tac = require(path.resolve('./models/TacModel'));

exports.TermAndCondition = function (req, res, next) {
    let data =  req.body;

    let TAndC = {
        Termandcondition : data.Termandcondition
    }
console.log('TAndC');
    let Tandc = new Tac(TAndC);

    Tandc.save(function (err, saveObj) {
        if (err){
            res.json({obj:err , meassage:'Sorry !!!!... Data not saved, Please try Again '});
        } else{
            res.json({obj: saveObj , message : 'Thanku.... Data  saved  Successfully'})
        }
    })


}
