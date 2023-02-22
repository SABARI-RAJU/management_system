var db = require('../db');
const queries = require('../query')

const getAllUsers = async() => {
    return new Promise(function(resolve, reject) {
        db.query(queries.allUsers, (err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

  
  
  const addUserService = async(values) => {
    return new Promise(function(resolve, reject) {
        db.query(queries.insertUsers,values,(err, result)=> {
            if (err) {
                return reject(err);
            }
            console.log(result)
            resolve(result);
        });
    });
  };

  
  const updateUserService = async(values,userId) => {
    return new Promise(function(resolve, reject) {
        
        db.query(queries.updateUsers,[values.username,values.useremail,values.userpassword,values.userphone,userId],(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

  
  const deleteUserService = async(userId) => {
    return new Promise(function(resolve, reject) {
        db.query(queries.deleteUsers,userId,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

  const userDetailService=async(userId)=>{
    return new Promise(function(resolve, reject) {
    //   var sql ="select b.bookname,r.borroweddate,r.returndate from reservation r,books b where r.userid=? and b.bookid=r.bookid;";
      db.query(queries.sqlUserDetailService,userId,(err, result)=> {
          if (err) {
              return reject(err);
          }
          resolve(result);
      });
  });
  
  }
  


  
  module.exports = {
    getAllUsers,
    addUserService,
    updateUserService,
    deleteUserService,
    userDetailService
  }