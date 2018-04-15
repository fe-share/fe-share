const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap:  'inline',
                            plugins: [
                                // require('autoprefixer')()
                            ]
                    } },
                    { loader: 'less-loader', options: { sourceMap: true } }
                ]
            }]
    }
};