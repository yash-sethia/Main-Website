const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/topgrid').get((req, res) => {
    Article.find().then(articles => {
        var only5 = articles.slice(0, 5);
        return(res.status(200).json({articleData : only5}));
      })
      .catch(err => console.log(err));
  });

  router.route('/rightgrid').get((req, res) => {
    Article.find().then(articles => {
        var only5 = articles.slice(5, 10);
        return(res.status(200).json({articleData : only5}));
      })
      .catch(err => console.log(err));
  });
// 16
  router.route('/leftgrid').get((req, res) => {
    Article.find().then(articles => {
        var only5 = [];
        var t = 0, biz = 0, tech = 0, life = 0, sci = 0;
        var n = articles.length;
        var i = Math.random() * n;
        i = parseInt(i);
        var limit = i == 0? n : i - 1;
        // console.log("i = ", i);
        for(; t < 12 && i != limit; i = (i + 1) % n) {
          // console.log("i = ", i);
          if(biz < 3 && articles[i].articleID.substring(25, 49) === "603e7d4cf49dab101cb36398" || articles[i].articleID.substring(25, 49) === "603e7d87f49dab101cb363a0") {
            t++;
            biz++;
            only5.push(articles[i]);
          }
          else if(tech < 3 && articles[i].articleID.substring(25, 49) === "603e7d74f49dab101cb3639a" || articles[i].articleID.substring(25, 49) === "603e7d78f49dab101cb3639b" || articles[i].articleID.substring(25, 49) === "603e7d7ef49dab101cb3639d") {
            t++;
            tech++;
            only5.push(articles[i]);
            // console.log("Hi");
          }
          else if(life < 3 && articles[i].articleID.substring(25, 49) == "603e7d7bf49dab101cb3639c" || articles[i].articleID.substring(25, 49) == "603e7d84f49dab101cb3639f") {
            t++;
            life++;
            only5.push(articles[i]);
          }
          else if(sci < 3 && articles[i].articleID.substring(25, 49) == "603e7d81f49dab101cb3639e" || articles[i].articleID.substring(25, 49) == "603e7d4df49dab101cb36399") {
            sci++;
            t++;
            only5.push(articles[i]);
          }
        }
        console.log(only5.length);
        return(res.status(200).json({articleData : only5}));
      })
      .catch(err => console.log(err));
  });

// Task id and category match up
// Business : "603e7d4cf49dab101cb36398" or "603e7d87f49dab101cb363a0"
// Technology : "603e7d74f49dab101cb3639a" or "603e7d78f49dab101cb3639b" or 603e7d7ef49dab101cb3639d
// Lifestyle : 603e7d7bf49dab101cb3639c or 603e7d84f49dab101cb3639f
// Science : 603e7d81f49dab101cb3639e or 603e7d4df49dab101cb36399


module.exports = router;
