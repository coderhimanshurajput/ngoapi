'isUseStrict';

const
    path = require('path'),
    async =  require('async'),
    _ = require('lodash'),
    mongoose =  require('mongoose');

let Fundraiser =  require(path.resolve('./models/FundraiserModel'));

exports.AddFundraiser = function (req, res, next) {
    let data = req.body;

    Fundraiser.create({
        Fundraiser_name: data.Fundraiser_name,
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
    },function (err, SaveObj) {
        if(err){
            res.status(500).json({
               message : 'Sorry'
            });
        }else {
            res.status(200).json({
               message : 'thanks'
            });
        }
        });
}
