var express = require('express');
var router = express.Router();

var add_article = require('../helpers/add-article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/home')
});

router.post('/add-article',(req,res)=>{
  //console.log(__dirname)
  add_article.addArticle(req.body).then((result)=>{
    console.log(result)
    let articleImg = req.files.image

    articleImg.mv('public/article-images/'+result.insertedId.toString()+'.jpg',(err,done)=>{
      if(!err){
        res.send(result)
      }else{
        res.send(err+"thisis error")
      }
    })
  })
})

module.exports = router;
