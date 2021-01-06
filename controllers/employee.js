let express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const employee = require('../model/employeeModel')
const hash=require('../utils/hash')




router.post('/add',async (req, res) => {
  console.log(req.body)

      var token = req.headers['authorization'];
        if(token.startsWith('Bearer '))
        {
          token = token.slice(7, token.length);
          var decoded = jwt.decode(token);
          console.log(decoded)
          if(decoded.email == 'Admin' ){
            console.log("h")
          var Add=await new employee({
                eid:req.body.eid,
                first:req.body.first,
                last:req.body.last,
                position:req.body.position,
                });
                Add.save((error,result)=>{
                    if(error){
                      console.log(error)
                     return  res.status(404).send({"status":"invalid"});
                    }
               return res.status(200).send({"status":"added"});
            });
          }
        }
    
})
 

router.get('/allemployee',(req,res,error)=>{

    employee.find({},(error,docs)=>{
       if(error){
          console.log(error)
       }
       console.log(docs)
       return res.status(200).send(docs)
    })
  
})





module.exports=router;