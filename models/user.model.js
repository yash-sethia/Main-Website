const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true
    },
    displayPicture: {
        type: String,
        // We need to have a by default image 
    },
    coverImage: {
        type: String
        // We need to have a by default image 
    },
    bio: {
        type: String,
        maxlength: 200,
        minlength: 50,
        required: true
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    facebookId: {
        type: String
    },
    twitterId: {
        type: String
    },
    linkedinId: {
        type: String
    },
    reviewRating: {
        type: Number,
        default: 0
    },
    taskCount: {
        type: Number,
        default: 0
    },
    aiRating: {
        type: Number,
        default: 0
    },
    skilliesEarned: {
        type: Number,
        default: 0
    },
    badgesReceived: {
        type: Array,
        items: {
            type: String
        }
        //Set up default value ?
    }

    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;