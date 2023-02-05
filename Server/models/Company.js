const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },

    name: { 
        type: String,
        required: true
    }

},{timestamps: true})

module.exports = mongoose.model('Company',companySchema);