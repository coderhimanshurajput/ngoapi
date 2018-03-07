'use strict';

const
    path = require('path'),
    async  = require('async'),
    _ =  require('lodash'),

    md5 = require('md5'),
    crypto = require('crypto'),
    fs = require('fs'),
    mongoose  =  require('mongoose');

let UserD = require(path.resolve('./models/UserModel'));

exports.userAdd =  function (req,  res, next) {

    let HasPass =  crypto.createHash('sha256').update(String).digest('hex');

     // body declaration

    let data =  req.body;

    // body with attribute (Fildes) Declaration

    let adduser = {
        User_name:data.User_name,
        User_address: data.User_address,
        User_email: data.User_email,
        User_mobile: data.User_mobile,
        HasPass: data.User_pass,
        User_img: data.User_img
    }
    // console.log(adduser);

    let AddUser = new UserD(adduser);
    console.log(AddUser);
    AddUser.save(function (err, saveObj) {
        if (err){
            res.json({obj:err,message:'Sorry!!!!.... data user not Saved'});
        }else {
            res.json({obj:saveObj, message: ' Thanku.... user save succfully'});
        }
    })
}