const router = require('express').Router();
let User = require('../models/user.model');
let Article = require('../models/article.model');



// How to get all article of user given his userId + How do we know that the article is to be shown in portfolio
router.route('/:id').get((req, res) => {
  User.find({_id : req.params.id})
    .then(users => {
      Article.find({articleID : {$regex : '^' + req.params.id}}).then(articles => {
        res.status(200).json( {userData : users, articleData: articles} )
      })
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const username = req.body.username;
  const name = req.body.name;
  const displayPicture = req.body.displayPicture;
  const coverImage = req.body.coverImage;
  const bio = req.body.bio;
  const city = req.body.city;
  const country = req.body.country;
  const email = req.body.email;
  const facebookId = req.body.facebookId;
  const twitterId = req.body.twitterId;
  const linkedinId = req.body.linkedinId;
  const reviewRating = req.body.reviewRating;
  const aiRating = req.body.aiRating;
  const skilliesEarned = req.body.skilliesEarned;
  const badgesReceived = req.body.badgesReceived;

  const newUser = new User({
      userId,
      username,
      name,
      displayPicture,
      coverImage,
      bio,
      city,
      country,
      email,
      facebookId,
      twitterId,
      linkedinId,
      reviewRating,
      aiRating,
      skilliesEarned,
      badgesReceived,
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;