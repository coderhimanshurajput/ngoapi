'use strict';
const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose');

let Disasters = require(path.resolve('./models/DisastersModel'));

exports.DisastersAdd= function(req, res){
    let data = req.body;

    Disasters.create({
        Disaster_name: data.Disaster_name,
        Short_Description: data.Short_Description,
        Full_Description: data.Full_Description,
        Country: data.Country,
        Sate: data.Sate,
        City:  data.City,
        Zip: data.Zip,
        Address: data.Address,
        Cover_img: data.Cover_img,
        Photo: data.Photo,
        Document: data.Document
    },
       function (err, Disasters) {
           if(err){
               res.status(500).json({
                  message:'OOps!!!! There was a problem please try again later'
               });
           } else {
             res.status(200).send({
                 message:'Thanks ... Your Information is saved '
             })
           }
       });
};
