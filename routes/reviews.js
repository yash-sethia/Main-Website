const router = require('express').Router();
let User = require('../models/article.model');
const Review = require('../models/review.model');

router.route('/:articleID').get((req, res) => {
  Review.find({articleID : req.params.articleID})
    .then(reviews => res.json( {ReviewData : reviews} ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const articleID = req.body.articleID;
  const positiveReview = req.body.positiveReview;
  const negativeReview = req.body.negativeReview;
  const rating = req.body.rating;

  const newUser = new User({
      articleID,
      positiveReview,
      negativeReview,
      rating
    });

  newUser.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;