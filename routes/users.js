var express = require('express');
var router = express.Router();
var article_helper = require('../helpers/add-article')

/* GET users listing. */
router.get('/', function(req, res, next) {
  article_helper.getRecentArticles().then((result)=>{
    console.log(result)
    res.render('index',{recentArticles:result})
  })
  
});

module.exports = router;
