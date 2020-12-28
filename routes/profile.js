const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/:username').get((req, res) => {
  Profile.find({username : req.params.username})
    .then(profile => res.json( {ProfileData : profile} ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userID = req.body.userID;
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

  const newProfile = new Profile({
      userID,
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

  newProfile.save()
    .then(() => res.json('Profile Data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;