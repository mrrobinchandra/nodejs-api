const bodyParser = require('body-parser');
var cors = require('cors')

var express = require('express')
var app = express();
var http = require('http').createServer(app);

const api=require('./Api');

var port = process.env.PORT || 8000;
const db=require('./db');
const router=express.Router();

var cor={
     "origin": "*",
     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
     "preflightContinue": false,
      "optionsSuccessStatus": 204
   }

app.use(cors(cor));


//application/x-www-form-urlencoded or multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));
//json
app.use(bodyParser.json({ extended: true }));

app.use(api);



http.listen(port, function () {
     console.log("Running RestHub on port " + port);
});