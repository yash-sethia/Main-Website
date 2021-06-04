const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/topgrid').get((req, res) => {
    Article.find().then(articles => {
        var only5 = articles.slice(0, 5);
        return(res.status(200).json({articleData : only5}));
      })
      .catch(err => console.log(err));
  });


  
module.exports = router;
