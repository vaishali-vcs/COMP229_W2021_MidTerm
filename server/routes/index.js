/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Mar-06-2021
This module has routing logic for Home page
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
