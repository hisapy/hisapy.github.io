const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.baseConfig.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "main-[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false, // set to false if you want CSS source maps,
            annotation: true
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // .nojekyll is to indicate GH Pages we're not using Jekyll
    new CopyWebpackPlugin({
      patterns: [{ from: ".nojekyll" }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
