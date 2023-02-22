var db = require('../db');
const moment = require("moment");
const queries = require('../query')

const getQuantity = async(bookId) => {
    return new Promise(function(resolve, reject) {
        // var sql ="select bookquantity from books where bookid=?";
        db.query(queries.sqlGetQuantity,bookId,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

const registerService = async(bookingDetail) => {
    console.log(bookingDetail)
        // var sql ="INSERT INTO reservation(userid,bookid,borroweddate,returndate,returnstatus) values(?,?,?,?,?)";
        var registeredDate=moment().format("YYYY-MM-DD")
        var dateMoment = moment(registeredDate, "YYYY-MM-DD").add(15, 'days');
        var returnDate=dateMoment.format("YYYY-MM-DD")
        
        db.query(queries.sqlRegisterService,[bookingDetail.userId,bookingDetail.bookId,registeredDate,returnDate,0], function(err, result) {
            if (err) throw err;
          });
  };

  const reduceQuantity = async(bookingDetail) => {
        
        getQuantity(bookingDetail.bookId).then((value)=>{
        // var sql="UPDATE books SET bookquantity =? where bookid=?"
        db.query(queries.sqlReduceQuantity,[value[0].bookquantity-1,bookingDetail.bookId], function(err, result) {
            if (err) throw err;
        });
    
        })
  };

const reservedBookInfo = async(bookId) => {
    return new Promise(function(resolve, reject) {
      // var sql ="select * from reservation where bookid=?";
      db.query(queries.sqlReservedBookInfo,bookId,(err, result)=> {
          if (err) {
              return reject(err);
          }
          resolve(result);
      });
  });
          
};

const getReturnDateService = async(value)=>{
  var minimum=value[0].returndate
  var returnstatus=value[0].returnstatus
  console.log(minimum)
  value.map((reservationDetail)=>{
  if(reservationDetail.returndate<minimum)
    {
      minimum=reservationDetail.returndate;
      returnstatus=reservationDetail.returnstatus
    }
  })
  // var diff =minimum.getTime()-new Date().getTime() ;   
  // var daydiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return [minimum,returnstatus];
}

const returnDate= async(reservationId)=>{

    return new Promise(function(resolve, reject) {
        // var sql ="select returndate from reservation where reservationid=?";
        db.query(queries.sqlReturnDate,reservationId,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });

}

const renewalService=async(renewalDetail)=>{
  return returnDate(renewalDetail.reservationId).then((dateObject)=>{
    var updateddate=moment(dateObject[0].returndate, "YYYY-MM-DD").add(renewalDetail.days, 'days').format("YYYY-MM-DD")
    return new Promise(function(resolve, reject) {
    // var sql="UPDATE reservation SET returndate =? where reservationid=?"
    db.query(queries.sqlRenewalService,[updateddate,renewalDetail.reservationId], function(err, result) {
      if (err) return reject(err);
        resolve(result);
    });
  });
  })
  
}

const increaseQuantity = async(bookId) => {
        
  getQuantity(bookId).then((value)=>{
  // var sql="UPDATE books SET bookquantity =? where bookid=?"
  db.query(queries.sqlIncreaseQuantity,[value[0].bookquantity+1,bookId], function(err, result) {
      if (err) throw err;
  });

  })
};

const returnService=async(renewalDetail)=>{
  return new Promise(function(resolve, reject) {
  increaseQuantity(renewalDetail.bookId)
  // var sql="UPDATE reservation SET returnstatus =? where reservationid=?"
  db.query(queries.sqlReturnService,[1,renewalDetail.reservationId], function(err, result) {
      if (err){
        return reject(err);
      }
      resolve(result)
  });
});
  
}



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


  
  module.exports = {
    getQuantity,
    registerService,
    reduceQuantity,
    reservedBookInfo,
    getReturnDateService,
    renewalService,
    returnService,
    getUserByEmailService
  }