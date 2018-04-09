# webpack 配置

## module和devServer
emo02中相同配置项不再赘述

```javascript
  const path = require('path')

  module.exports = {
    // 模式, development | production
    mode: 'development',

    // 入口配置， 要求类型：String | Object | Array
    entry: './demo02/index.js',   // 路径从根目录开始 
    // entry: {a: './demo02/index.js'},
    // 如果没有配置output中的filename，则key为输出文件名

    // 输出配置
    output: {   
      path: path.resolve(__dirname, 'dist'),  // 所有输出文件的目标文件夹

      filename: 'main.js',             // 输出文件名
      // filename: '[name].js',        // 多入口文件时
      // filename: '[chunkhash].js',   // 为了长期缓存

      publicPath: '/assets/',       // 相对于html解析目录的url

      // 用于导出库的配置项（一般不使用）
      library: 'MyLibrary',   // 导出库的名称
    
      libraryTarget: 'umd' // 导出库的类型
      // 可选 umd|umd2|commonjs|commonjs2|amd|this|var|assign|window|global|jsonp
    },

    // 模块配置
    module: {
      // 模块的规则（配置loaders，解析选项等）
      rules: [
        {
          // 匹配resource，即被导入的文件
          // test和include为相同的行为，均必须被匹配
          test: /\.jsx?$/,      // RegExp
          include: [
            path.resolve(__dirname, 'src')
          ],
          // exclude表示排除的文件夹
          exclude: [
            path.resolve(__dirname, 'common')
          ],

          // 匹配条件的发起者(即导入源)
          issuer: { 
            test: /\.jsx?$/, 
            include: [path.resolve(__dirname, 'src')],
            exclude: [path.resolve(__dirname, 'common')],
          },

          // 应用这些规则的标识，表明前置pre还是后置post
          enforce: 'pre',

          // 应用的loader，将被关联的上下文解析
          loader: 'babel-loader',

          // loader的配置项，babel-loader推荐写在.babelrc文件中
          options: {
            presets: ['es2015']
          }
        },
        {
          test: /\.less$/,
          // 如果需要使用多个loader，则需要使用该选项，数组内loader默认倒序使用来解析文件
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    },

    // 测试服务
    devServer: {
      contentBase: path.join(__dirname, 'dist'),   // 静态文件地址
      compress: true,                              // 是否压缩,
      historyApiFallback: true,                    // 404则返回index.html
      hot: true,                                   // 热加载.依赖于HMR插件
      noInfo: true,                                // 只有热加载错误或者警告
      https: false,                                // true表示自签名
      port: 8888,                                  // 端口号
      proxy: {                                     // 代理url
        '/api': 'http://localhost:3000'
      }
    }
  }
```

### 注意
#### resource和issuer的区别
  如在``app.js``中引入``index.less``，则resource为``/path/to/index.less``，issuer为``/path/to/app.js``