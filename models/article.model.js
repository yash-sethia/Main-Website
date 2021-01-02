const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    articleID: {
        type: String
    },
    articleTitle: {
        // Define minimum length
        type: String
    },
    articleContent: {
        // Define minimum length
        type: String
    },
    articleImages: {
        type: String
        //Not sure what type of data is here
    },
    progress: {
        type: Number
    },
    daysSpent: {
        type: Number
    },
    noOfViews: {
        type: Number
        // Set default as 0
    },
    noOfReviews: {
        type: Number
        // Set default as 0
    },
    reviewRating: {
        type: Number
        // We can set a default value of 0
        // Set max and min/default
    },
    aiRating: {
        type: Number
        // We can set a default value of 0
        // Set max and min/default
    },
    aiRating_1: {
        type: Number                   //Readabilty
        // We can set a default value of 0
    },
    aiRating_2: {
        type: Number                   //TBD
        // We can set a default value of 0
    },
    aiRating_3: {
        type: Number                   //TBD
        // We can set a default value of 0
    },
    aiRating_4: {
        type: Number                   //TBD
        // We can set a default value of 0
    },
    skilliesEarned: {
        type: Number
        // We can set a default value of 0
    },

    }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;