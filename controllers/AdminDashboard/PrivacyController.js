'use strict';

const
    path = require('path'),
    async = require('async'),
    _ = require('lodash'),
    mongoose  = require('mongoose')

let Privacy = require(path.resolve('./models/PrivacyModel'));

exports.PrivacyDet = function (req, res, next) {

    let Privacyadd={
        Privacy:req.body.Privacy
    }
    let addprivacy = new Privacy(Privacyadd);

    addprivacy.save(function (err, saveObj) {
        if(err){
            res.json({obj:err , message : 'Sorry!!!!... data not saved'});
        }else {
            res.json({obj:saveObj, message:'Thanku...... Data save Successfully '})
        }
    })

}