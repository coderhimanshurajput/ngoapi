'use strict ';
const
    express = require('express'),
    bcrypt = require('bcryptjs'),
    jwt =  require('jsonwebtoken'),
    path = require('path'),
    async = require('async'),
    _ = require('lodash'),
    mongoose =  require('mongoose');

var User =  require(path.resolve('./models/adminloginModel'));
var config =  require(path.resolve('./config/secretkey'));

exports.AdminRegister = function (req, res, next) {
    User.find({ Admin_email: req.body.Admin_email })
        .exec()
        .then(user => {
            if (user.length >= 1 ) {
                return res.status(409).json({
                    message: "OOPS!!!! Email-Id all ready used !!"
                });
            } else {
                bcrypt.hash(req.body.Admin_pass, 10, (err, hash) => {

                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            Admin_name : req.body.Admin_name,
                            Admin_user : req.body.Admin_user,
                            Admin_email: req.body.Admin_email,
                            Admin_pass : hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "User created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });

};

exports.AdminLogin = function (req, res,  next ) {
    user.find({Admin_email:req.body.Admin_email})
     .exec()
     .then(user=> {
         if(user.length < 1 ){
           return res.status(401).json ({
               message: 'Sorry!!'
           })
         }
         bcrypt.compare(req.body.Admin_pass, user[0].Admin_pass,(err, result)=> {
                if(err){
                    return res.status(401).json({
                        message: 'Auth Faield'
                    });
                } if(result){
                    return res.status(200).json({
                        message: 'Login Succsfully '
                    });
                }
                res.status(401).json({
                    message: 'Auth failed '
                })
         })

     })
     .catch(err =>{
         console.log(err);
         res.status(500).json({
             error: err
         });
     });

    const user = {
        Admin_name: req.body.Admin_name,
        Admin_user: req.body.Admin_user,
        Admin_pass: req.body.Admin_pass
    }
    jwt.sign({user}, 'secretkey' , (err, token) =>{
        res.json({
            token
        })
    })

}

exports.getAdmin = ((req, res, next) => {
    let cursor = db.adminloginmodels.find({},{Admin_name:1,Admin_user:1,Admin_email:1});
    cursor.each((err, item)=> {
      if(item != null) {
          str = str + "Admin_name" + "<br>";
      }  
    });
    res.sent(str);
    db.close();
})