const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    articleID: {
        type: String
    },
    articleTitle: {
        type: String,
        minlength: 10
    },
    articleContent: {
        type: String,
        minlength: 100,
        type: String
    },
    articleImages: {
        type: String
        //Not sure what type of data is here
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    daysSpent: {
        type: Number,
        default: 0
    },
    noOfViews: {
        type: Number,
        default: 0
    },
    noOfReviews: {
        type: Number,
        default: 0
    },
    reviewRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    aiRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    aiRating_1: {
        type: Number,
        default: 0,
        min: 0,
        max: 100                   //Readabilty
    },
    aiRating_2: {
        type: Number,
        default: 0,
        min: 0,
        max: 100                   //TBD
    },
    aiRating_3: {
        type: Number,
        default: 0,
        min: 0,
        max: 100                   //TBD
    },
    aiRating_4: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,                   //TBD
        type: Number
        // Set default as 0
    },
    skilliesEarned: {
        type: Number,
        default: 0
        // We can set a default value of 0
    },

    }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;