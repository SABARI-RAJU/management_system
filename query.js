module.exports = {
    allUsers: "select * from users",
    insertUsers:"INSERT INTO users SET ?",
    updateUsers:"UPDATE users SET username =? , useremail =? , userpassword=? , userphone=? WHERE userid = ?",
    deleteUsers:"Delete from users where userid=?",
    sqlGetQuantity:"select bookquantity from books where bookid=?",
    sqlRegisterService:"INSERT INTO reservation(userid,bookid,borroweddate,returndate,returnstatus) values(?,?,?,?,?)",
    sqlReduceQuantity:"UPDATE books SET bookquantity =? where bookid=?",
    sqlReservedBookInfo:"select * from reservation where bookid=?",
    sqlReturnDate:"select returndate from reservation where reservationid=?",
    sqlRenewalService:"UPDATE reservation SET returndate =? where reservationid=?",
    sqlIncreaseQuantity:"UPDATE books SET bookquantity =? where bookid=?",
    sqlReturnService:"UPDATE reservation SET returnstatus =? where reservationid=?",
    sqlUserDetailService:"select b.bookname,r.borroweddate,r.returndate from reservation r,books b where r.userid=? and b.bookid=r.bookid",
    sqlGetUserByEmailService:"select * from users where userEmail=?",
    sqlGetAllBooks:"select * from books",
    sqlAddBookService:"INSERT INTO books SET ?",
    sqlUpdateBookService:"UPDATE books SET bookname =? , bookquantity =?  WHERE bookid = ?",
    sqlDeleteBookService:"Delete from books where bookid=?",
    sqlReservedBookService:"select * from reservation"


  }
 
