// const {userService} =require('../services');
var db = require('../db');
const queries = require('../query')
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const getUserByEmailService = async(email) => {
    return new Promise(function(resolve, reject) {
        // var sql ="select * from users where userEmail=?";
        db.query(queries.sqlGetUserByEmailService,email,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };
  

const loginService=async(body)=>{
    const email = body.useremail;
    const password = body.userpassword;
    user = await getUserByEmailService(email);

    if(!user){
        return ({
            message: "Invalid email or password"
        })
    }

    const isValidPassword = bcrypt.compareSync(password, user[0].userpassword);
    if(isValidPassword){
        user[0].userpassword = undefined;
        const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
        // res.cookie('token', jsontoken, {expires: new Date(Number(new Date()) + 30*60*1000)} ); //we add secure: true, when using https.
        console.log(jsontoken)
        return({token: jsontoken});
    }  
    else{
     return({
         message: "Invalid email or password"
     });
 } 


}

module.exports = {
    loginService
  }




//  const email = req.body.useremail;
//  const password = req.body.userpassword;
//  user = await userService.getUserByEmailService(email);

//  console.log(user)
  
//  if(!user){
//      return res.json({
//          message: "Invalid email or password"
//      })
//  }

//  const isValidPassword = bcrypt.compareSync(password, user[0].userpassword);
//  if(isValidPassword){
//      user[0].userpassword = undefined;
//      const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
//      res.cookie('token', jsontoken, {expires: new Date(Number(new Date()) + 30*60*1000)} ); //we add secure: true, when using https.

//      res.json({token: jsontoken});

//  }  else{
//      return res.json({
//          message: "Invalid email or password"
//      });
//  } 