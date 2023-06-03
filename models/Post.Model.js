//! Post model -> Schema

// requiring mongoose
const mongoose = require('mongoose');

// maing PostSchema ->
const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    imageUrl: String,
    location: String,
    postedAt: Date,
    price: String,
})

// making realtions with model -> schema
const PostModel = mongoose.model('Post', postSchema);

// exporting PostModel for use in  Post router -> schema
module.exports = PostModel;
