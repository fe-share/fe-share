const webpack = require("webpack");
const path = require("path");
const PurifyCss = require("purifycss-webpack");
const glob = require("glob-all");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader"
                    ]
                })
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                "env"
                            ],
                            plugins:[
                                "lodash"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(path.resolve(__dirname,"dist")),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new ExtractTextWebpackPlugin({
            filename:"css/[name].[hash].css",
            allChunks:false
        }),
        new PurifyCss({
            paths: glob.sync([
                path.join(__dirname,'./src/index.html'),
                path.join(__dirname,'./src/*.js')
            ])
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}


