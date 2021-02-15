/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  plugins: [
    new webpack.IgnorePlugin(/(\.flow|\.ts)$/),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // language: "en"
      forHire: false,
      template: "template.html"
    }),
    new FaviconsWebpackPlugin({
      logo: "./images/profile_pic.jpg",
      background: "#fff",
      prefix: "icons/"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, "src", "template.html"),
        use: ["html-loader"]
      },
      {
        // file-loader for images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./images/"
            }
          }
        ]
      }
    ]
  }
};
