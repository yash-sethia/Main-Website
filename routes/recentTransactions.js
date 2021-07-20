const router = require('express').Router();
const Article = require('../models/article.model');

router.route('/:id').get((req, res) => {
    Article.find().then(articles => {
        const tasks = ["603e7d4cf49dab101cb36398", "603e7d4cf49dab101cb36399", "603e7d4cf49dab101cb3639a", "603e7d4cf49dab101cb3639b", "603e7d4cf49dab101cb3639c", "603e7d4cf49dab101cb3639d", "603e7d4cf49dab101cb3639e", "603e7d4cf49dab101cb3639f", "603e7d87f49dab101cb363a0"];
        let n = articles.length;
        var skillies = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(let i = 0; i < n; i++) {
            let idx = -1;
            for(let j = 0; j < 9; j++) {
                if(articles[i].articleID === req.params.id + "-" + tasks[j]) {
                    idx = j;
                    break;
                }
            }
            if(idx != -1) {
                skillies[idx] = articles[i].skilliesEarned
            }
        }
        skillies.reverse();
        res.status(200).json({skillies: skillies});
    })
    .catch(err => console.log("Recent Transactions Error in finding Articles : ", err));
});


module.exports = router;