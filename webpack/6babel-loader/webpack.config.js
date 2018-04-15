const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
      index:'./src/index.js'
  },
  output:{
      path:path.resolve(__dirname,"dist"),
      filename:"[name].[hash:8].bundle.js",
      publicPath:'./'
  },
  module:{
      rules:[
          {
              test:/\.js$/,
              use:[
                  {
                      loader:'babel-loader',
                      options:{
                          presets:["env","react"],
                          plugins:[
                              "transform-vue-jsx",
                              'transform-runtime'
                          ]
                      }
                  }
              ],
              exclude: /node_modules/
          },
          {
              test:/\.ts$/,
              use:"ts-loader"
          }
      ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};