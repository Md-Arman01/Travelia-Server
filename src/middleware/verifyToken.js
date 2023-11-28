require("dotenv").config();
var jwt = require('jsonwebtoken');


const verifyToken = async(req, res, next)=>{

  try{
    if(!req.headers.authorization){
      console.log(req.headers.authorization , '8')
      return res.status(401).send({message: 'unauthorized'})
    }
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
      if(err){
        console.log(err, '14')
        return res.status(401).send({message: 'unauthorized'})
      }
      req.user = decoded
      next()
    })

  }catch(err) {
    next(err)
}
    
  }

module.exports = verifyToken;