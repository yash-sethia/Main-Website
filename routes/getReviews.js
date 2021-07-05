const router = require('express').Router();
const Review = require('../models/review.model');
let Article = require('../models/article.model');


router.route('/').post((req, res) => {
    console.log(req.body.userId + "-" + req.body.taskId)
    Article.find({articleID : req.body.userId + "-" + req.body.taskId})
    .then(article => {
      // console.log(article.length);
      if(article[0] === undefined) {
          //console.log("Yes")
        return res.status(200).json( {reviewData : []} );
      }
      Review.find({articleId : article[0]._id})
      .then(reviews => res.status(200).json( {reviewData : reviews} ))
      .catch(err => res.status(400).json('Error in retrieving Reviews : ' + err));
    })
    .catch(err => console.log("Error in retriving Article for review : ", err));
  });
  

  module.exports = router;  