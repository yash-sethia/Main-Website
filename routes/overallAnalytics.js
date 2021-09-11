const router = require('express').Router();
const Review = require('../models/review.model');
const Article = require('../models/article.model');
const User = require('../models/user.model');

router.route('/:id').get((req, res) => {
    User.findOne({_id : req.params.id}).then(user => {
        var articleCount = 0, reviewsRecieved = 0, reviewsDone = 0, skilllies = 0.0, aisum = 0, rrsum = 0, cnt = 0;
      // Finding articles
      const tasks = ["603e7d4cf49dab101cb36398", "603e7d4df49dab101cb36399", "603e7d74f49dab101cb3639a", "603e7d78f49dab101cb3639b", "603e7d7bf49dab101cb3639c", "603e7d7ef49dab101cb3639d", "603e7d81f49dab101cb3639e", "603e7d84f49dab101cb3639f", "603e7d87f49dab101cb363a0"]
      var data = [
          {
              ai: 0,
              rr: 0,
              skilllies: 0
          },
          {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
        {
            ai: 0,
            rr: 0,
            skilllies: 0
        },
      ]
      var aids = [];
      console.log("Hi")
      Article.find().then(articles => {
        var n = articles.length;
        for(let i = 0; i < n; i++) {
          if(articles[i].articleID.substring(0, 24) == user._id) {
            aids.push(articles[i]._id);
            let idx = tasks.indexOf(articles[i].articleID.substring(25, 49));
            console.log(articles[i].articleID.substring(25, 49));
            if(idx != -1) {
                skilllies += articles[i].skilliesEarned;
                aisum += articles[i].aiRating;
                rrsum += articles[i].reviewRating
                cnt++;
                data[idx].ai = articles[i].aiRating;
                data[idx].rr = articles[i].reviewRating;
                data[idx].skilllies = articles[i].skilliesEarned;

            }
          }
        }
        skilllies = skilllies.toFixed(2);
        console.log(skilllies)
        //console.log(aids);
        let aiarray = [];
        let rrarray = [];
        let skarray = [];
        let transactions = [];
        aisum = aisum / cnt;
        rrsum = rrsum / cnt;
        for(let i = 0; i < 9; i++) {
            aiarray.push(data[i].ai);
            rrarray.push(data[i].rr);
            // if(data[i].skilllies > 0) {
            //     skarray.push(data[i].skilllies.toFixed(2));
            // }
            // else {
            //     skarray.push(data[i].skilllies);
            // }
            skarray.push(Math.round(data[i].skilllies * 1e2) / 1e2);
            transactions.unshift(data[i].skilllies);
        }
        Review.find().then(reviews => {
            var prev = "", nrev = "";
            var n = reviews.length;
            console.log(n);
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < aids.length; j++) {
                    if(aids[j] == reviews[i].articleId) {
                        // console.log("hello");
                        prev = prev + reviews[i].positiveReview;
                        nrev = nrev + reviews[i].negativeReview;
                    }
                }
            }
            res.status(200).json({oai: aisum, orr: rrsum, oskillies: skilllies, aiarr: aiarray, rrarr: rrarray, skarr: skarray, tranarr: transactions, positiveReviews: prev, negativeReviews: nrev});
        })
        // Unavle to read Reviews
        .catch(err => console.log("Backend Overall Analytics Reviews Reading error : ", err));
    })
    // Can't find articles
    .catch(err => console.log(err))
    })
    // User not found
    .catch(err => console.log(err));
});


module.exports = router;  