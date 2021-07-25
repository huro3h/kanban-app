// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// Expressアプリケーションインスタンスを受け取る関数のエクスポート
module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するようなミドルウェアをインストール
  app.use(bodyParser.json())

  // TODO: APIの実装内容
}
