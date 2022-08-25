const { resolve } = require('path')

// express server
const express = require('express')
const app = express()

// token
const { expressjwt: jwt } = require('express-jwt')

// MongoDB Server
const db = require('./db/conn')

// CORS
const cors = require('cors')

// Route
const userRouter = require('./routes/user')
const articleRouter = require('./routes/arcticle')
const profileRouter = require('./routes/profile')
const pinsRouter = require('./routes/pins')

// 定义秘钥。注册解析中间件
const secret = 'shared-secret'
// 服务器启动端口
const SERVER_PORT = 4000

app.use(cors())
app.use(express.json())
app.use('/images', express.static(resolve(__dirname, './public/images/')))

app.all('/', (req, res) => {
  res.send('OK')
})

// 不使用鉴权的路由
app.use(jwt({
  secret: secret,
  algorithms: ['HS256'],
  credentialsRequired: false,
  getToken: (req) => {
    // post请求的headers.authorization参数
    if (req?.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[0]
    }
    // get请求的token参数
    else if (req?.query && req?.query?.token) {
      return req.query.token
    }
    return null
  },
}).unless({ path: [/^\/api/, /^\/user/] }))

app.use(userRouter)
app.use(articleRouter)
app.use(profileRouter)
app.use(pinsRouter)

/*
 * 启动MongoDB服务的同时启动Express服务
 *
 * @Error MongoDB连接失败则Express服务也不会启动
 *  */
db.connToServer(err => {
  if (err) {
    console.error(err)
    process.exit()
  }
  app.listen(SERVER_PORT, () => {
    console.log('net', SERVER_PORT)
  })
})

module.exports = secret