const bcrypt = require("bcrypt");
const {userService} =require('../services');
const {loginService} =require('../services');
const jsonwebtoken = require("jsonwebtoken");
const login=(async (req,res,next)=>{
    try{

        const result=await loginService.loginService(req.body)
        res.cookie('token',result.token, {expires: new Date(Number(new Date()) + 30*60*1000)} ); //we add
        res.send(result)
        } 
        catch(e){
            console.log(e);
        }

})

module.exports={login}