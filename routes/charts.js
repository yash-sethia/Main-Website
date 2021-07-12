const router = require('express').Router();
let Article = require('../models/article.model');


router.route('charts/:username').get((req, res) => {
    Article.find().then(articles => {
        var n = articles.length;
        var skilllies = [];
        var j = 0;
        for(let i = 0; i < n && j < 9; i++) {
          if(articles[i].articleID.substring(0, 24) == req.params.username) {
            skilllies[i] = articles[i].skilliesEarned;
            j++;
          }
        }
        console.log(skilllies);
        return(res.status(200).json({skillliesArray : skilllies}));
      })  
});


module.exports = router;