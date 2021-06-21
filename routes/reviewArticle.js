const router = require('express').Router();
let Article = require('../models/article.model');


router.route('/:taskId').get((req, res) => {
    Article.find().then(articles => {
        var art = {};

        for(let i = 0; i < articles.length; i++) {
            if(articles[i].articleID.includes(req.params.taskId)) {
                art = articles[i];
                break;
            }
        }
        return(res.status(200).json({articleData : art}));
      })
      .catch(err => console.log(err));
  });



module.exports = router;