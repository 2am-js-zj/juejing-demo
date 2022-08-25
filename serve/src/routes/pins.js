const express = require('express')
const pinsRouter = express.Router()
const db = require('../db/conn')

// 在获取数据时必须await等待查询完成!
pinsRouter.route('/pins').get(async (req, res) => {
  const dbConnect = db.getDB()

  const pins = await dbConnect
    .collection('pins')
    .find()
    .toArray()
  console.log(pins)
  if (pins) {
    res.send(pins)
  }
  else {
    res.send('获取失败')
  }

})

module.exports = pinsRouter