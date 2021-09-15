const { reject, resolve } = require('promise')
const db = require('../confiq/connection')
const collection = require('../confiq/collection')

module.exports = {
    addArticle:(article,articleImg)=>{
        return new Promise((resolve,reject)=>{
            article.date = new Date().toISOString().slice(0,10)
            

            db.get().collection(collection.ARTICLE_COLLECTION).insertOne(article).then((result)=>{

                var resizeWidth = 500
                articleImg
                articleImg.mv('public/article-images/'+result.insertedId.toString()+'.jpg',(err,done)=>{
                    if(!err){
                        console.log(result)
                      resolve(result)
                    }else{
                        console.log(err)
                      resolve(err)
                    }
                  })
                
            })
        })
    },
    getRecentArticles:()=>{
        return new Promise(async(resolve,reject)=>{
            let articleDb = await db.get().collection(collection.ARTICLE_COLLECTION).find().sort({date:-1}).limit(2).toArray()
            
            console.log(new Date().toISOString().slice(0,10))
            //console.log(articleDb)
            resolve(articleDb)
        })
    }

}