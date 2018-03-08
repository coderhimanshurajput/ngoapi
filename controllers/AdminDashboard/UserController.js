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

    let HasPass = bcrypt.hashSync(req.body.User_pass,8) ;
    // let Haspass = crypto.createHash('md5').update(str).digest('BufferSource');
    // body with attribute (Fildes) Declaration
console.log(HasPass);

    UserD.create ({
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
        });
};


