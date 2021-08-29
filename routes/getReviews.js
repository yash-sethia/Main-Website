const router = require('express').Router();
const Review = require('../models/review.model');
let Article = require('../models/article.model');
var ObjectId = require('mongodb').ObjectID;


router.route('/').post((req, res) => {
    // console.log(req.body.userId + "-" + req.body.taskId)
    Article.find({articleID : req.body.userId + '-' + req.body.taskId})
    .then(article => {
      //console.log(article.length);
      // {articleID:"6129f6addb33090934841e1b-603e7d4df49dab101cb36399"}

      // {articleID:"6129f6addb33090934841e1b-603e7d4cf49dab101cb36399"}
      if(article[0] === undefined) {
          console.log("Yes")
        return res.status(200).json( {reviewData : []} );
      }
      console.log(article[0]._id)
      Review.find({articleId : article[0]._id})
      .then(reviews => res.status(200).json( {reviewData : reviews} ))
      .catch(err => res.status(400).json('Error in retrieving Reviews : ' + err));
    })
    .catch(err => console.log("Error in retriving Article for review : ", err));
  });
  

  module.exports = router;  