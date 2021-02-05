const router = require('express').Router();
const Review = require('../models/review.model');
const Article = require('../models/article.model');

router.route('/:articleId').get((req, res) => {
  Review.find({articleId : req.params.articleId})
    .then(reviews => {
        var review_rating = 0.0;
        Article.findById(req.params.articleId)
        .then(articles => res.json( {EngagementData :{ reviews : reviews, overallReviewRating : articles.reviewRating }} ))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;