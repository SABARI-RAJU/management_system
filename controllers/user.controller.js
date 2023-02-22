const {userService} =require('../services');
const bcrypt = require("bcrypt");
const httpStatus = require("http-status");


const detailsByUserId=(async(req,res)=>{
    userService.userDetailService(req.body.userId).then((userBookDetail)=>{
        console.log(userBookDetail.length)
        if(!userBookDetail.length)
        {
            res.status(httpStatus.NOT_FOUND).send({data:"User not Found"})
        }
        else{
            res.send({"data":userBookDetail})
        }
    })
})

const showUsers = (async (req, res) => {

    userService.getAllUsers().then((value)=>{
        res.send(value);
      })
      
  });

const addUser = (async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(req.body.userpassword, salt);
    req.body.userpassword=password;
    userService.addUserService(req.body).then((value)=>{
        if(value.affectedRows==1)
        {
            res.send({"data":"Data inserted Successfully"})
        }
        else{
            res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not inserted"})
        }
    })

});


const updateUser = (async (req, res) => {
    userService.updateUserService(req.body,req.params.userId).then((value)=>{
        if(value.affectedRows==1)
        {
          res.send({"data":"Data updated Successfully"}) 
        }
        else{
          res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not updated"})
        }
        
      })  
    
});

const deleteUser = (async (req, res) => {
    userService.deleteUserService(req.params.userId).then((value)=>{
        if(value.affectedRows==1)
        {
          res.send({"data":"Data deleted Successfully"})
        }
        else{
          res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not deleted"})
        }
        
      })
      
  });

module.exports={
    detailsByUserId,
    showUsers,
    addUser,
    updateUser,
    deleteUser
}