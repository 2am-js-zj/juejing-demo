const express = require('express')
const userRouter = express.Router()
const db = require('../db/conn')
const JWT = require('jsonwebtoken')

// 在获取数据时必须await等待查询完成!
userRouter.route('/user').post(async (req, res, next) => {
  try {
    JWT.verify(req.headers.authorization, 'secret', { algorithm: 'HS256' }, (err, decoded) => {
      res.send({
        body: `登录成功,欢迎您, ${ decoded.user }`,
        statusCode: 200,
        statusText: 'OK',
        isLogin: true,
      })
    })
  }
  catch (e) {
    next()
  }
}, async (req, res) => {
  try {
    const getUser = db.getDB()
    const result = await getUser
      .collection('shadow')
      .findOne({ aut_name: req.body.account }, { aut_name: 1, aut_pwd: 1 })

    if (result.aut_name) {
      if (req.body.password === result['aut_pwd']) {
        let newToken = ''
        JWT.sign({ user: result['aut_name'] }, 'secret', { algorithm: 'HS256' }, (err, token) => {
          if (err) {
            console.error(err.message)
          }
//          console.log(token)
          newToken = token
        })
        console.log(newToken)
        res.send({
          isLogin: true,
          username: result.aut_name,
          cookie: newToken,
          statusCode: 200,
          statusText: '登录成功',
        })
      }
    }
    else {
      console.error('账号密码错误或者没有该账号')
    }
  }
  catch (e) {
    res.send({
      isLogin: false,
      error: '登录失败',
      statusCode: 401,
      statusText: e,
    })
  }
})

module.exports = userRouter