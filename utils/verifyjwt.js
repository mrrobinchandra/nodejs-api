const config =require('../config')
const jwt = require('jsonwebtoken');

verifyjwt=(req, res, next) => {
    var token = req.headers['authorization'];

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
        jwt.verify(token, config.key.secret ,async(err, decoded) =>{
            if (err) {
                console.log(err)
                return res.sendStatus(403);
            }
            let decode= await jwt.decode(token, {complete: true});
           if(decode.header.alg == "HS256" && decode.header.typ == 'JWT' && decode.payload.iss == 'rapoo'){
            next();
           }
           else{
            return res.send("err")
           }
        });
    } else {
        console.log("decoded+err")
        res.sendStatus(401);
    }
}

module.exports=verifyjwt