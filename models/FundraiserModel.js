'use strict';

const
    path = require('path'),
    mongoose =  require('mongoose'),
    dataSchema  = mongoose.Schema;

let Fundraiser =  new dataSchema({
    Fundraiser_name : { type: String, require : true},
    Short_Description : { type: String, require : true},
    Full_Description : {type: String, require : true},
    Country : {type : String ,  require : true },
    Sate : {type : String, require : true},
    City  : {type: String , require : true },
    Zip  : { type : String ,  require : true},
    Address : { type : String ,  require : true},
    Cover_img : { type : String , require : true },
    Photo : { type : String , require : true},
    Document : { type : String , require : true}
});

module.exports = mongoose.model('FundraiserModel' , Fundraiser)