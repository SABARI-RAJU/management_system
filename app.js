const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/v1");
const ApiError = require("./ApiError");
const httpStatus = require("http-status");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');


dotenv.config();
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());
app.options("*", cors());


app.use("/v1", routes);




app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});


module.exports = app;