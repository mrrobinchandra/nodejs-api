const express = require('express');
const router = express.Router();
const model=require('../model')

router.use('/v1',model);



module.exports = router;