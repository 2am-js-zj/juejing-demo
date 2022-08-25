const { MongoClient } = require('mongodb')

// URI
const connAltURI = 'mongodb://root:msdnmm@152.32.186.251:27017/?retryWrites=true&w=majority'

// 要使用的数据库名
const dbNamespace = 'juejin'

// 启动MongoDB客户端并配置
const client = new MongoClient(connAltURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let dbConn

module.exports = {
  connToServer: callback => {
    /*
     * 连接MongoDB数据库的处理
     *
     * @params err { AnyError | undefined } 连接异常
     * @params db { Any } 连接成功
     *
     * @Error 连接异常时抛出异常给外部处理
     * @return 连接成功时给外部进行操作
     *  */
    client.connect((err, db) => {
      if (err || !db) {
        return callback(err)
      }

      dbConn = db.db(dbNamespace) // 连接demo数据库
      console.log('成功连接数据库', dbNamespace)

      return callback()
    })
  },

  getDB () {
    return dbConn
  },
}