const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // limit: 2000,
                            // outputPath:"dist/",
                            publicPath:"",
                            // useRelativePath:true
                        }
                    }
                ]
            },{
                test:/\.html$/,
                use: [
                    "html-loader"
                ]
            }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'html-webpack-plugin',
            template:'./src/index.html',
            inject: 'body'
        })
    ]
}