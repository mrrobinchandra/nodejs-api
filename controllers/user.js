const express=require('express');
const router=express.Router();
const db=require('../db');
const jwt = require('jsonwebtoken');
const hash=require('../utils/hash')
const config=require('../config')
const user=require('../model/userModel')



router.post('/signin',(req,res,err)=>{
  console.log( req.body.password)
  if(req.body)
  {
  //  let password=await hash.password(req.body.password)
    user.findOne({ email: req.body.email},async (err,docs) =>
    {
      if(err) console.log(err);
     if(req.body.password ==  docs.password)
     {
       let userData={
         email:docs.email
       }
        const token = jwt.sign(userData, config.key.secret,
        {
            issuer: config.key.issuer,
            expiresIn: config.key.expiresIn
        })
        console.log(token)
       return res.status(200).send({'email':docs.email,'token':token,
        'message':'sucessfully logged in' })
      }
      else{
        console.log('fh')
        return res.status(400).send({
        'message':'Invalid' })
      }
      
    });
  }
  else{
    return res.status(404).send({
    'message':'Invalid' })
  }
})



module.exports=router;