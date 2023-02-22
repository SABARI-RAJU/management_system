const jsonwebtoken = require("jsonwebtoken");

const verifyToken = async(req, res, next)=>{
    
    const token=req.cookies.token;
     console.log("token",token);
      
     if(token === undefined  ){
          
             return res.json({
                 message: "Access Denied! Unauthorized User"
               });
     } else{
  
         jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, authData)=>{
             if(err){
                 res.json({
                     message: "Invalid Token..."
                   });
  
             } else{

                const role = authData.user[0].usertype;
                if(role === "admin"){
  
                 next();
                } else{
                    return res.json({
                        message: "Access Denied! you are not an Admin"
                      });
  
                }
             }
         })
     } 
 }

 module.exports = verifyToken;