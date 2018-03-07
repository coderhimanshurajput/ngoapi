'use strict ';

const
    path = require('path'),
    async = require('async'),
    _ = require('lodash'),
    mongoose =  require('mongoose');

var AdminLogin =  require(path.resolve('./models/adminloginModel'));

exports.adminLogin = function (req, res, next) {
    // console.log('himanshu login');

    let data =  req.body;

    let adminDetails = {
        Admin_name : data.Admin_name,
        Admin_user : data.Admin_user,
        Admin_pass : data.Admin_pass
    }
    // console.log(adminDetails);

    let adminLogin = new AdminLogin(adminDetails);

    adminLogin.save(function (err, saveObj) {
        if(err){
            res.json({obj:err, message: 'Sorry!!! Data Not Saved '});
        } else{
            res.json ({obj : saveObj, message: 'Thanku.... Data is save Successfully'});
        }
    });

}
