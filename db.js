const mongoose = require('mongoose');

const MONGO_USERNAME = '';
const MONGO_PASSWORD = '';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'tcapp';

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://localhost:27017/test`;

const dbconn=mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true} ,(error) =>
    {
        if(!error){
            console.log("entered")
        }
        else
        {
            console.log("failed")
        }
    });

module.exports=dbconn;