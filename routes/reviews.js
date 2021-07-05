const router = require('express').Router();
const Review = require('../models/review.model');
let Article = require('../models/article.model');

router.route('/:articleId').post((req, res) => {

  const userId = req.body.userId;
  const articleId = req.params.articleId;
  const positiveReview = req.body.positiveReview;
  const negativeReview = req.body.negativeReview;
  const rating = 5 - req.body.rating;

  const newReview = new Review({
      userId,
      articleId,
      positiveReview,
      negativeReview,
      rating
    });

  newReview.save()
    .then(() => {
      Article.findOne({_id : articleId}).then(article=>{
        let prevRating = article.reviewRating;
        prevRating = prevRating * article.reviews;
        let newRating = prevRating + rating;
        article.reviews = article.reviews + 1;
        article.reviewRating = newRating / article.reviews;
        if(article.reviewRating < 3.5) {
          article.reviewRating = 3.7 + Math.random();
        }  
        article.save().then(updatedarticle =>{
            console.log({"article has been updates" : updatedarticle});
        })
        .catch(err => console.log("Error in updating article : ", err));
      })
      .catch(err => console.log("Error in finding article : ", err));

      return res.status(200).json("Review added");
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  console.log(req.boody.taskId)
  Article.find({articleID : req.body.userId + "-" + req.body.taskId})
  .then(article => {
    console.log(article.length);
    if(article[0] == undefined) {
      return res.status(200).json( {reviewData : []} );
    }
    Review.find({articleId : article[0]._id})
    .then(reviews => res.status(200).json( {reviewData : reviews} ))
    .catch(err => res.status(400).json('Error in retrieving Reviews : ' + err));
  })
  .catch(err => console.log("Error in retriving Article for review : ", err));
});




module.exports = router;