/*
File Name: book.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Mar-06-2021
This module has Book schema.
the DB collection name is books
*/


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
