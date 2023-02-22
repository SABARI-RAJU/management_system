const db = require('../db');
const {reservationService} =require('../services');
const ApiError = require("../ApiError");
const httpStatus = require("http-status");


const register =(async (req, res) => {

    const quantity=reservationService.getQuantity(req.body.bookId);
    quantity.then((val)=>{
        if(val[0].bookquantity>0)
        {
            reservationService.registerService(req.body)
            reservationService.reduceQuantity(req.body)
            res.send({"data":"Books reserved successfully"});
        }
        else{
            reservationService.reservedBookInfo(req.body.bookId).then((value)=>{
                if(value[0]==null)
                {
                    res.send({"data":"No Books Available"})
                }
                else{
                    reservationService.getReturnDateService(value).then((returnDate)=>{
                        if(returnDate[1]==0)
                        {
                            res.send({"data":"your Book will be Available in "+returnDate[0]})
                        }
                        else
                        {
                            res.send({"data":"No Books Available"})
                        }
                        
                    })    
                }
                    
            })
            
        }
    })   
});

const renewal=(async(req,res)=>{
    var status=await reservationService.renewalService(req.body)
    console.log(status)
    if(status.affectedRows==1)
    {
      res.send({"data":"Renewal Done!!!!"})
    }
    else{
      res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Renewal not Done"})
    }
});

const returnBook=(async(req,res)=>{
    var status=await reservationService.returnService(req.body)
    if(status.affectedRows==1)
    {
      res.send({"data":"Return Done!!!!"})
    }
    else{
      res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Renewal not Done"})
    }
});




module.exports = {
    register,
    renewal,
    returnBook
  };