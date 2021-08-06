const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: 'index.html',
          },
        },
      ],
      },
      {
        test: /\.png$/i,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images',
          },
        },
      ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
};
