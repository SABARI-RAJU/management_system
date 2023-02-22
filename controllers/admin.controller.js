const {adminService} =require('../services');
const httpStatus = require("http-status");

var db = require('../db');

const showBooks = (async (req, res) => {

      adminService.getAllBooks().then((value)=>{
        res.send({"data":value});
      })
      
  });

const addBooks = (async (req, res) => {
  adminService.addBookService(req.body).then((value)=>{
    if(value.affectedRows==1)
    {
      res.send({"data":"Data inserted Successfully"})
    }
    else{
      res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not inserted"})
    }
})
    
});

const updateBooks = (async (req, res) => {
  adminService.updateBookService(req.body,req.params.bookId).then((value)=>{
    if(value.affectedRows==1)
    {
      res.send({"data":"Data updated Successfully"})
    }
    else{
      res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not updated"})
    }
    
  })   
});

const deleteBooks = (async (req, res) => {
  var bookId=req.params.bookId;
  adminService.deleteBookService(bookId).then((value)=>{
    if(value.affectedRows==1)
    {
      res.send({"data":"Data deleted Successfully"})
    }
    else{
      res.status(httpStatus.NOT_IMPLEMENTED).send({"data":"Data not deleted"})
    }
    
  })
    
});

const reservedBooks= (async (req, res) => {
  
  adminService.reservedBookService().then((value)=>{
    if(!value.length)
    {
      res.status(httpStatus.NOT_FOUND).send({data:"Reservations not Found"})
    }
    else{
      res.send({"data":value})
    }
    
  })
});



module.exports = {
    showBooks,
    addBooks,
    updateBooks,
    deleteBooks,
    reservedBooks
  };