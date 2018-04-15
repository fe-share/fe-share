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
                  test: /\.css$/,
                  use: [
                      {loader:'style-loader',
                      options:{

                      }
                      },
                      {loader:'css-loader'}
                  ]
                 },
                  {
                      test: /\.less$/,
                      use: [
                          {loader:'style-loader'},
                          {loader:'css-loader'},
                          {loader:'less-loader'}
                      ]
                  },
                  {
                      test: /\.scss$/,
                      use: [
                          {loader:'style-loader'},
                          {loader:'css-loader'},
                          {loader:'sass-loader'}
                      ]
                  }

          ]
        }
};