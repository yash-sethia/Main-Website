const router = require('express').Router();
let Article = require('../models/article.model');
let User = require('../models/user.model');

// Need a route that returns all the articles of a user given that we pass user's Id

router.route('/:articleID').get((req, res) => {
  Article.find({articleID : req.params.articleID})
    .then(articles => res.json( {ArticleData : articles} ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // console.log("This is from backend : ", req.body)
  const articleID = req.body.articleID; // User Id + Task Id 
  const articleTitle = req.body.articleTitle;
  const articleContent = req.body.articleContent; // How to divide into paragraph ???
  const articleImages = req.body.articleImages;
  // const progress = req.body.progress;
  // const daysSpent = req.body.daysSpent;
  // const noOfViews = req.body.noOfViews;
  const noOfReviews = 0;
  const reviewRating = req.body.reviewRating;
  const aiRating = req.body.aiRating;
  const aiRating_1 = req.body.aiRating_1;
  const aiRating_2 = req.body.aiRating_2;
  const aiRating_3 = req.body.aiRating_3;
  const aiRating_4 = req.body.aiRating_4;
  const skilliesEarned = 20;


  const newArticle = new Article({
      articleID,
      articleTitle,
      articleContent,
      articleImages,
      // progress,
      // daysSpent,
      // noOfViews,
      // noOfReviews,
      reviewRating,
      aiRating,
      aiRating_1,
      aiRating_2,
      aiRating_3,
      aiRating_4,
      skilliesEarned,
    });

  newArticle.save();
    User.findOne({_id: articleID.substring(0, 24)}).then(user => {
      user.aiRating = ((user.aiRating * user.taskCount) + aiRating) / (user.taskCount + 1);
      user.skilliesEarned = user.skilliesEarned + 20;
      user.taskCount = user.taskCount + 1;
      user.save().then(res => console.log("Updates User stats as well!"))
      .catch(err => console.log("In Profile, error in updating User data ", err))
    })
    .then(() => res.status(200).json({article: newArticle}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;