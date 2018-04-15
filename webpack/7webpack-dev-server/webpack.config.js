const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry:{
      index:"./src/index.js"
  },
  output: {
      path:path.resolve(__dirname,'dist'),
      filename:'[hash:8].bundle.js',
      publicPath:"./"
  },
  module:{
      rules:[
          {
              test:/\.css$/,
              use:["style-loader","css-loader"]
          }
      ]

    }
  ,
  devServer:{
      // contentBase: path.join(__dirname, "/dist"),//启动服务目录
      // contentBase: __dirname +"/dist",
      compress: true,//gzip压缩
      port: 9000,//端口号
      historyApiFallback: {
          rewrites:[{
              // from:"/page/a",
              // to:"/page/a.html"
              from:/^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
              to:function (context) {
                  return "/"+context.match[1]+context.match[2]+".html"
              }
          }]
      },//404返回index
      open: true,//每次编译打开浏览器
      overlay: {
          warnings: true,
          errors: true
      },//编译提示错误和警告
      proxy: {
          "/": {
              target: "http://1.203.115.115:8888",
              pathRewrite: {"/ap" : "/api"},
              changeOrigin:true,
              headers:{
                  token:"zhangsan"
              },
              logLevel:"debug"
          }
      },//开发环境代理
      progress:true,//编译进度
      publicPath: "/",//路径 确保 publicPath 总是以斜杠(/)开头和结尾。
      // watchContentBase: true,
      watchOptions:{
          poll: true
      },//webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。
      hot:true,//启用 webpack 的模块热替换特性：
      inline:true//应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台。
  },
  plugins:[
      new HtmlWebpackPlugin({
          template:'./src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(["dist"]),
      new webpack.NamedModulesPlugin()
  ]
};