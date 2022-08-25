const express = require('express')
const articleRouter = express.Router()
const db = require('../db/conn')

// 在获取数据时必须await等待查询完成!
articleRouter.route('/api/article').get(async (req, res) => {
  const dbConnect = db.getDB()

  const articleList = await dbConnect
    .collection('article')
    .find()
    .toArray()
  res.send(articleList)
})

module.exports = articleRouter