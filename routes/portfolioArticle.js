const router = require('express').Router();
let Article = require('../models/article.model');
let User = require('../models/user.model');

router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
      .then(articles => res.json( {portfolio : articles} ))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;