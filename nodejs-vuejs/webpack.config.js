const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        inline: true,
        open: true
      },
      module: {
        rules: [
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
          }
        ]
      },
    plugins: [
      // 热部署html
        new webpack.HotModuleReplacementPlugin()
    ]
    
};

