const Joi = require("joi");

const login = {
    body: Joi.object().keys({
        useremail: Joi.string().email().required(),
        userpassword: Joi.string().required(),
    }),
  };

const signup = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        useremail: Joi.string().email().required(),
        userpassword:Joi.string().required(),
        usertype:Joi.string().required(),
        userphone:Joi.string().length(10).pattern(/^[0-9]+$/).required()
    }),
  };

  const userBooks = {
    body: Joi.object().keys({
        userId: Joi.number().integer().required()
    }),
  };

  const userUpdate = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        useremail: Joi.string().email().required(),
        userpassword:Joi.string().required(),
        userphone:Joi.string().length(10).pattern(/^[0-9]+$/).required()
    }),
  };

  const register = {
    body: Joi.object().keys({
        userId: Joi.number().integer().required(),
        bookId: Joi.number().integer().required()
    }),
  };

  const renewal = {
    body: Joi.object().keys({
      reservationId: Joi.number().integer().required(),
      days:Joi.number().integer().required()
    }),
  };

  const returnBook = {
    body: Joi.object().keys({
        reservationId: Joi.number().integer().required(),
        bookId: Joi.number().integer().required()
    })
  };

  const addBook = {
    body: Joi.object().keys({
        bookname: Joi.string().required(),
        bookquantity: Joi.number().integer().required(),
    }),
  };

  const updateBook = {
    body: Joi.object().keys({
        bookname: Joi.string().required(),
        bookquantity: Joi.number().integer().required(),
    }),
  };



  module.exports = {
    login,
    signup,
    userBooks,
    userUpdate,
    register,
    renewal,
    returnBook,
    addBook,
    updateBook
  };