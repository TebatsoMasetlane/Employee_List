const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const books = mongoose.model("books", booksSchema)
module.exports = books;