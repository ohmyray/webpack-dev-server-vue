const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname, "main.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js", // string    // 输出文件的名称
    publicPath: "", // string    // 相对于HTML页面解析的输出目录的url
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 为了vue-loader安装的插件
    new VueLoaderPlugin()
  ]
}