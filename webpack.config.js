const path = require('path');
const IS_PROD = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './Client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(  __dirname,'./Client/dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js||jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { // CSS Modules
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: IS_PROD || {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};



