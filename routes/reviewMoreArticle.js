const router = require('express').Router();
let Article = require('../models/article.model');


router.route('/:articleId').get((req, res) => {
    Article.findById(req.params.articleId).then(article => {
        return(res.status(200).json({articleData : article}));
      })
      .catch(err => console.log(err));
  });



module.exports = router;