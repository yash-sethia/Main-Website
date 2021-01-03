const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    
    articleId: {
        type: String
    },
    positiveReview: {
        type: String,
        minlength: 50
    },
    negativeReview : {
        type: String,
        minlength: 50  
    },
    rating: {
        // Define minimum and maximum length. Also this comes from a slider to uske hisaab se inska min and max banega
        type: Number
    }

    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;