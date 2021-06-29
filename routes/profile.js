const router = require('express').Router();
let User = require('../models/user.model');
let Article = require('../models/article.model');
const Review = require('../models/review.model');



// How to get all article of user given his userId + How do we know that the article is to be shown in portfolio

router.route('/:username').get((req, res) => {
  User.findOne({username : req.params.username})
    .then(users => {
      //console.log(users._id);
      var articleCount = 0, reviewsRecieved = 0, reviewsDone = 0, skilllies = 0, ai = 0, rr = 0, cnt = 0;
      // Finding articles
      Article.find().then(articles => {
        var n = articles.length;
        for(let i = 0; i < n; i++) {
          if(articles[i].articleID.substring(0, 24) == users._id) {
            articleCount = articleCount + 1;
            skilllies += articles[i].skilliesEarned;
            ai += articles[i].aiRating;
            rr += articles[i].reviewRating
            cnt++;
            if(articles[i].reviews != undefined) {
              reviewsRecieved += articles[i].reviews;
            }
            // console.log(articleCount);
          }
        }
        users.skilliesEarned = skilllies;
        users.aiRating = ai / cnt;
        users.reviewRating = rr / cnt;
        users.taskCount = articleCount;

        users.save().then(res => console.log("Updates User stats as well!"))
        .catch(err => console.log("In Profile, error in updating User data ", err))

        // Finding Reviews
        Review.find({userId : users._id}).then(reviews => {
          reviewsDone = reviews.length;
          res.status(200).json( {UserData : users, reviewsWritten: reviewsDone, reviewsGot: reviewsRecieved});
        })
        // Catch for reviews
        .catch(err => console.log("In Profile, Review server side error : ", err))

        
      })
      // Catch for Articles
      .catch(err => console.log("In Profile, Articles server side error : ", err));

    })
    // Catch for Profile
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;