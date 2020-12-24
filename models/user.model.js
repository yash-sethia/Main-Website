const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    },
    coverImage: {
        type: String
    },
    bio: {
        type: String,
        maxlength: 100
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String
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
        type: Number
    },
    aiRating: {
        type: Number
    },
    skilliesEarned: {
        type: Number
    },
    badgesReceived: {
        type: Array,
        items: {
            type: String
        }
    }

    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;