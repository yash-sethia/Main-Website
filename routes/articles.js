const router = require('express').Router();
let User = require('../models/article.model');

router.route('/:articleID').get((req, res) => {
  Article.find({articleID : req.params.articleID})
    .then(articles => res.json( {ArticleData : articles} ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const articleID = req.body.articleID;
  const articleTitle = req.body.articleTitle;
  const articleContent = req.body.articleContent;
  const articleImages = req.body.articleImages;
  const progress = req.body.progress;
  const daysSpent = req.body.daysSpent;
  const noOfViews = req.body.noOfViews;
  const noOfReviews = req.body.noOfReviews;
  const reviewRating = req.body.reviewRating;
  const aiRating = req.body.aiRating;
  const aiRating_1 = req.body.aiRating_1;
  const aiRating_2 = req.body.aiRating_2;
  const aiRating_3 = req.body.aiRating_3;
  const aiRating_4 = req.body.aiRating_4;
  const skilliesEarned = req.body.skilliesEarned;

  const newUser = new User({
      articleID,
      articleTitle,
      articleContent,
      articleImages,
      progress,
      daysSpent,
      noOfViews,
      noOfReviews,
      reviewRating,
      aiRating,
      aiRating_1,
      aiRating_2,
      aiRating_3,
      aiRating_4,
      skilliesEarned,
    });

  newUser.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;