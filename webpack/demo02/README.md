# webpack 配置

## mode、entry和output

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
    }
  }
```