const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    articleID: {
        type: String
    },
    articleTitle: {
        type: String
    },
    articleContent: {
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
    },
    noOfReviews: {
        type: Number
    },
    reviewRating: {
        type: Number
        // We can set a default value of 0
    },
    aiRating: {
        type: Number
        // We can set a default value of 0
    },
    aiRating_1: {
        type: Number                   //Readabilty
    },
    aiRating_2: {
        type: Number                   //TBD
    },
    aiRating_3: {
        type: Number                   //TBD
    },
    aiRating_4: {
        type: Number                   //TBD
    },
    skilliesEarned: {
        type: Number
        // We can set a default value of 0
    },

    }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;