const router = require('express').Router();
let User = require('../models/user.model');

router.route('/:id').post((req, res) => {
    User.findOne({_id : req.params.id})
    .then(user => {
        user.bio = req.body.bio;
        user.facebookId = req.body.facebookId;
        user.twitterId = req.body.twitterId;
        user.linkedinId = req.body.linkedinId;
        user.save().then(updatedUser => {
            res.status(200).json({user: updatedUser});
        })
        .catch(err => console.log("Error in saving: ", err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;