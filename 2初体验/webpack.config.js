const path = require('path');
// path.resolve当前配置文件获取绝对路径
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle1.js',
        path: path.resolve(__dirname, 'dist')
    }
};