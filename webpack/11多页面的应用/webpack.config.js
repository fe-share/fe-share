const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpack = require("clean-webpack-plugin");
const ExtractTextWebpack = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const  baseConfig= {
    entry:{
        react:"react"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[chunkhash].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpack.extract({
                    fallback:"style-loader",
                    use:'css-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpack({
            filename:"css/[name].[hash].css"
        }),
        new CleanWebpack(path.resolve(__dirname,'dist')),
        new webpack.optimize.CommonsChunkPlugin({name:"react",minChunks:Infinity})
    ]

}
const generatePage = function ({title='',entry='',template='./src/index.html',name='',chunks=[]} = {}) {
    return {
        entry,
        plugins:[
            new HtmlWebpackPlugin({title,chunks,template,filename:name+'.html'}),
        ]
    }
}
const pages = [
    generatePage({title:'1',entry:{a:"./src/js/a.js"},name:'a',chunks:["react","a"]}),
    generatePage({title:'2',entry:{b:"./src/js/b.js"},name:'b',chunks:["react","b"]}),
    generatePage({title:'3',entry:{c:"./src/js/c.js"},name:'c',chunks:["react","c"]})
];
console.log( pages.map(page => merge(baseConfig, page)));
module.exports = pages.map(page => merge(baseConfig, page));