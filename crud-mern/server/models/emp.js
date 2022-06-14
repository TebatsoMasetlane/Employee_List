const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({

    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    }
});

const emp = mongoose.model("emp", empSchema)
module.exports = emp;