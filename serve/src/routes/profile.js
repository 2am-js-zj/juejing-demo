const express = require('express')
const profileRouter = express.Router()
const db = require('../db/conn')

// 在获取数据时必须await等待查询完成!
profileRouter.route('/profile').post(async (req, res) => {
  const dbConnect = db.getDB()

  const profile = await dbConnect
    .collection('profile')
    .findOne({ name: req.body.username })

  if (profile) {
    res.send(profile)
  }
  else {
    res.send('ERROR: 无法查询到此人')
  }

})

module.exports = profileRouter