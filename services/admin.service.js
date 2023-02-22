var db = require('../db');
const queries = require('../query')

const getAllBooks = async() => {
    return new Promise(function(resolve, reject) {
        // var sql ="select * from books";
        db.query(queries.sqlGetAllBooks, (err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

const addBookService = async(values) => {
    return new Promise(function(resolve, reject) {
        // var sql ="INSERT INTO books SET ?";
        db.query(queries.sqlAddBookService,values,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

const updateBookService = async(values,bookId) => {
    return new Promise(function(resolve, reject) {
        // var sql ="UPDATE books SET bookname =? , bookquantity =?  WHERE bookid = ?";
        db.query(queries.sqlUpdateBookService,[values.bookname,values.bookquantity,bookId],(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

  const deleteBookService = async(bookId) => {
    return new Promise(function(resolve, reject) {
        // var sql ="Delete from books where bookid=?";
        db.query(queries.sqlDeleteBookService,bookId,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };

  const reservedBookService = async(bookId) => {
    return new Promise(function(resolve, reject) {
        // var sql ="select * from reservation";
        db.query(queries.sqlReservedBookService,bookId,(err, result)=> {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
  };




  
  module.exports = {
    getAllBooks,
    addBookService,
    updateBookService,
    deleteBookService,
    reservedBookService
  }