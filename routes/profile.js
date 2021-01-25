const router = require('express').Router();
let User = require('../models/user.model');
let Article = require('../models/article.model');



// How to get all article of user given his userId + How do we know that the article is to be shown in portfolio

router.route('/:username').get((req, res) => {
  User.find({username : req.params.username})
    .then(users => res.json( {UserData : users} ))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;