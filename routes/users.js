var express = require('express');
var router = express.Router();
var article_helper = require('../helpers/article_models')
const collection = require('../confiq/collection');
const db = require('../confiq/connection')
const objectId = require('mongodb').ObjectId

/* GET users listing. */
router.get('/', async(req, res)=> {
  let articles = await db.get().collection(collection.ARTICLE_COLLECTION).find().sort({date:-1}).limit(4).toArray()
  let filterArticles = await db.get().collection(collection.ARTICLE_COLLECTION).find().limit(6).toArray()
  article_helper.getRecentArticles().then((result)=>{  
    res.render('index',{allArticles:articles,recentArticles:result,filterArticles:filterArticles})
  })
});

/* GET view article */
router.get('/:id',async(req,res)=>{
  var articleToBeView = await db.get().collection(collection.ARTICLE_COLLECTION).findOne({_id:objectId(req.params.id)})
  let sameTagArticles = await db.get().collection(collection.ARTICLE_COLLECTION).find({catagory:articleToBeView.catagory}).toArray()
  res.render('view-article',{article:articleToBeView,sameTagArticles:sameTagArticles})
})

module.exports = router;
