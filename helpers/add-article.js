const { reject } = require('promise')
const db = require('../confiq/connection')
const collection = require('../confiq/collection')

module.exports = {
    addArticle:(article)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ARTICLE_COLLECTION).insertOne(article).then((result)=>{
                resolve(result)
            })
        })
    }
}