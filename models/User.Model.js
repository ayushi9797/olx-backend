//! User model -> Schema

// requiring mongoose
const mongoose = require('mongoose');

// maing userSchema ->
const userSchema = new mongoose.Schema({

    email: String,
    password: String,
    
})

// making realtions with model -> schema
const UserModel = mongoose.model('user', userSchema);

// exporting userModel for use in router -> schema
module.exports = UserModel;
