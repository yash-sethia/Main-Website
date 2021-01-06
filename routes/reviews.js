const router = require('express').Router();
const Review = require('../models/review.model');

router.route('/:articleId').get((req, res) => {
  Review.find({articleId : req.params.articleId})
    .then(reviews => res.json( {reviewData : reviews} ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const articleId = req.body.articleId;
  const positiveReview = req.body.positiveReview;
  const negativeReview = req.body.negativeReview;
  const rating = req.body.rating;

  const newReview = new Review({
      articleId,
      positiveReview,
      negativeReview,
      rating
    });

  newReview.save()
    .then(() => res.status(200).json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;