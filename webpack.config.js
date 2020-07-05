const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineChunkHtmlPlugin = require('html-webpack-inline-chunk-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.(js|css)$/]),
  ],
};
