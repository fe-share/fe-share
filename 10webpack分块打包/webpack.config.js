const path = require("path");
const webpack = require("webpack");
const BundeAnalyerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry:{
        index:"./src/index.js",
        vendor:["lodash","vue"]
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[chunkhash].js"
    },
    plugins:[
        new BundeAnalyerPlugin(),
        new webpack.DllReferencePlugin({
            manifest:require("./src/dll/lodash.manifest.json")
        }),
        new webpack.DllReferencePlugin({
            manifest:require("./src/dll/vue.manifest.json")
        }),
        new CleanWebpackPlugin(path.resolve(__dirname,'dist')),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"runtime"
        })
    ]
}