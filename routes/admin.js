var express = require('express');
var router = express.Router();

var add_article = require('../helpers/add-article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/home')
});

router.get('/add-article',(req,res)=>{
  res.render('admin/add_article')
})
router.post('/add-article',(req,res)=>{
  //console.log(__dirname)
  add_article.addArticle(req.body,req.files.image).then((result)=>{
    console.log(result)
    res.redirect('/admin')
  })
})

module.exports = router;
