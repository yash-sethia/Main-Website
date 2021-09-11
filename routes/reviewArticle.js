const router = require('express').Router();
let Article = require('../models/article.model');


router.route('/:taskId').get((req, res) => {
    Article.find().then(articles => {
        var art = {};
        var n = articles.length - 1;
        var i = Math.random() * n;
        i = parseInt(i);
        var limit = i == 0? n : i - 1;
        var found = false;
        for(; i != limit; i = (i + 1) % n) {
            if(articles[i].articleID.includes(req.params.taskId)) {
                art = articles[i];
                found = true;
                break;
            }
        }
        if(found == false) {
            art = articles[n];
        }
        return(res.status(200).json({articleData : art}));
      })
      .catch(err => console.log(err));
  });



module.exports = router;