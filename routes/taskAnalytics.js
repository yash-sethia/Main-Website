const router = require('express').Router();
let User = require('../models/user.model');
let Article = require('../models/article.model');


router.route('/:id').get((req, res) => {
//   User.find({_id : req.params.id})
//     .then(users => {
//       Article.find({articleID : {$regex : '^' + req.params.id}}).then(articles => {
//         res.status(200).json( {userData : users, articleData: articles} )
//       })
//     }
//     )
//     .catch(err => res.status(400).json('Error: ' + err));

    Article.findById(req.params.id)
    .then(article => {
        User.find({_id : article.articleID.substring(0, 24)}).then(user => {
            const rrc = ((article.reviewRating - (user[0].reviewRating)) * 100) / (user[0].reviewRating);
            const airc = (((article.aiRating) - (user[0].aiRating)) * 100) / (user[0].aiRating);
            const ser = (((article.skilliesEarned) - (user[0].skilliesEarned / user[0].taskCount)) * 100) / (user[0].skilliesEarned / user[0].taskCount);
            res.status(200).json( {taskAnalytics : {
                Aid: 1,
                reviewRating: article.reviewRating,
                aiRating: article.aiRating,
                SkillliesEarned: article.skilliesEarned,
                DaysTaken: "Soon :)",
                reviewRatingChange: rrc.toFixed(2),
                aiRatingChange: airc.toFixed(2),
                SkillliesEarnedChange: ser.toFixed(2)
            }} )
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;