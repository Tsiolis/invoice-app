const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const invoiceRouter = require('./invoiceRouter');
const methodOverride = require("method-override");
const rateLimit = require('express-rate-limit');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride("_method"));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use(limiter);


app.use(invoiceRouter);

module.exports = app;