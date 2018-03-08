'use strict ';
const
    express = require('express'),
    bcrypt = require('bcryptjs'),
    jwt =  require('jsonwebtoken'),
    path = require('path'),
    async = require('async'),
    _ = require('lodash'),
    mongoose =  require('mongoose');

const AdminLogin =  require(path.resolve('./models/adminloginModel'));
var config =  require(path.resolve('./config/secretkey'));

exports.AdminRegister = function (req, res, next) {

    AdminLogin.find ({Admin_email : req.body.Admin_email})
        .exec()
        .then(AdminLogin => {
            if(AdminLogin.length >= 1){
                return res.status(409).json({
                    message : 'user All ready used this email id'
                });
            } else {
                bcrypt.hash(req.body.Admin_pass, 10 , (err, hash) => {
                    if(err){
                        return res.status(500).json({
                            error : err
                        });
                    } else {
                        let  AdminLogin = new AdminLogin ({
                            _id: new mongoose.Types.ObjectId(),
                            Admin_name : req.body.Admin_name,
                            Admin_user : req.body.Admin_user,
                            // Admin_email : req.body.Admin_email,
                            Admin_pass: hash
                        });
                        AdminLogin
                            .save()
                            .then(result =>{
                                console.log(result);
                                res.status(201).json({
                                    message : 'user create'
                                });

                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error:err
                                });
                            });
                    }
                });
            }
        });

};


    /*console. log(HasPassword);
    AdminLogin. create({
        _id: new mongoose.Types.ObjectId(),
        Admin_name : req.body.Admin_name,
        Admin_user : req.body.Admin_user,
        Admin_email : req.body.Admin_email,
        Admin_pass : HasPassword
    },
        function (err, AdminLogin) {
        if(err) return  res. status (500). send (" Sorry!!!! There was a problem the user..... Please try again later ")
            let token = jwt. sign ({id: AdminLogin. _id}, config. secret,{
                expiresIn: 900
            });
        res. status (200) .send ({auth: true, token: token})
        });
}*/
exports.AdminLogin = function (req, res,  next ) {
    // console.log('himanshu rajput test   ');
    const user = {
        Admin_name: 'himanshu',
        Admin_user: 'himanshurajput',
        Admin_pass: 'dsddsds'
    }
    jwt.sign({user}, 'secretkey' , (err, token) =>{
        res.json({
            token
        })
    })

}
