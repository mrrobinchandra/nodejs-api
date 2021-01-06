const express = require('express');
const router = express.Router();;
const employee=require("../controllers/employee");
const verifyJwt=require('../utils/verifyjwt');
const user =require('../controllers/user')

router.use('/',user);
router.use('/employee',verifyJwt,employee);


module.exports = router;