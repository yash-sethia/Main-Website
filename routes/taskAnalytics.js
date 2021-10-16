const router = require('express').Router();
let User = require('../models/user.model');
let Article = require('../models/article.model');
const Review = require('../models/review.model');


router.route('/').post((req, res) => {
    Article.find({articleID : req.body.userId + "-" + req.body.taskId})
    .then(article => {
        if(article.length == 0) {
            res.status(200).json( {taskAnalytics : {
                Aid: 1,
                reviewRating: 0,
                aiRating: 0.00,
                SkillliesEarned: 0,
                DaysTaken: "N/A",
                reviewRatingChange: 0.00,
                aiRatingChange: 0.00,
                SkillliesEarnedChange: 0.00
            }} )
        }
        console.log(req.body)
        User.findById(req.body.userId).then(user => {
            const rrc = ((article[0].reviewRating - (user.reviewRating)) * 100) / (user.reviewRating);
            const airc = (((article[0].aiRating) - (user.aiRating)) * 100) / (user.aiRating);
            const ser = (((article[0].skilliesEarned) - (user.skilliesEarned / user.taskCount)) * 100) / (user.skilliesEarned / user.taskCount);
            res.status(200).json( {taskAnalytics : {
                Aid: 1,
                reviewRating: article[0].reviewRating.toFixed(2),
                aiRating: article[0].aiRating.toFixed(2),
                SkillliesEarned: article[0].skilliesEarned.toFixed(2),
                DaysTaken: "Soon :)",
                reviewRatingChange: rrc.toFixed(2),
                aiRatingChange: airc.toFixed(2),
                SkillliesEarnedChange: ser.toFixed(2)
            }} )
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/wordcloud').post((req, res) => {
    Article.findOne({articleID : req.body.userId + "-" + req.body.taskId}).then(article => {
        Review.find().then(reviews => {
            var n = reviews.length;
            var prev = "", nrev = "";
            for(let i = 0; i < n; i++) {
                if(reviews[i].articleId == article._id) {
                    prev = prev + reviews[i].positiveReview;
                    nrev = nrev + reviews[i].negativeReview;
                }
            }
            res.status(200).json({pReview: prev, nReview: nrev});
        })
        .catch(err => console.log("Error from wordcloud per task backend in finding reviews: ", err));
    })
    .catch(err => console.log("Error from wordcloud per task backend: ", err));
});

module.exports = router;