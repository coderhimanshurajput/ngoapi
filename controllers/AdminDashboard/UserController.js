'use strict';

const
    express  = require('express'),
    path = require('path'),
    async  = require('async'),
    _ =  require('lodash'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    fs = require('fs'),
    mongoose  =  require('mongoose');

var UserD = require(path.resolve('./models/UserModel'));
var config =  require(path.resolve('./config/secretkey'));

exports.userAdd =  function (req,  res, next) {
    let err;
    UserD.find ({User_email: req.body.User_email,User_mobile: req.body.User_mobile})
        .exec()
        .then(user =>{
            if(user.length >= 1){
                return res.status(409).json({
                   message : 'OOPS!!!! Email-Id all ready used !!'
                });
            } else {
                bcrypt.hash(req.body.User_pass, 10, (err, hash) => {
                    if (err){
                        return res.status(500).json({
                            error:err
                        })
                    } else {
                        let user =  new UserD ({
                            _id : new mongoose.Types.ObjectId(),
                            User_name : req.body.User_name,
                            User_address: req.body.User_address,
                            User_email: req.body.User_email,
                            User_mobile: req.body.User_mobile,
                            User_pass: hash,
                            User_Verified: false , 
                            User_img: req.body.User_img
                        });

                        user
                            .save()
                            .then(result =>{
                                console.log(result);
                                res.status(201).json({
                                   message: "Data Saved"
                                });
                            })
                            .catch(err =>{
                                console.log(err)
                                res.status(500).json({
                                 error : err
                                });
                            });
                    }
                });
            }
        });


    /*UserD.create ({
       User_name : req.body.User_name,
       User_address: req.body.User_address,
       User_email: req.body.User_email,
       User_mobile: req.body.User_mobile,
       User_pass: HasPass,
        User_img: req.body.User_img
    },
        function (err, UserD) {
            if (err) return res.status(500).send("There was a problem registering the user .")
            var token = jwt.sign({id: UserD._id}, config.secret, {
                expiresIn: 900
            });
            res.status(200).send({auth: true, token: token})
        });*/
};

exports.UserDelete = function (req, res, next) {
    UserD.findByIdAndRemove(req.params.id, function (err, UserD) {
        if (err) return res.status(500).send('there was');
        res.status(200).send("UserD:"+UserD.name+ "was delete");
    })
}


