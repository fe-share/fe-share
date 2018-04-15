const path = require("path");
module.exports = {
    entry:{ hehe: "./src/index.js",
            haha: "./src/index1.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        // filename:"bundle.js",
        // filename:"[name].bundle.js",
        // filename:"[name].[hash].bundle.js",
        // filename:"[name].[hash:8].bundle.js",
        filename:"[chunkhash].bundle.js",
        publicPath:'/'
    }
};
