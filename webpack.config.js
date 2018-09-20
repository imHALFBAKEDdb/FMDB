var webpack = require("webpack");
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

var config = {
  entry: path.join(APP_DIR + "/index.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader"
        // })
        loader:
          "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "bundleMain.js"
  },
  plugins: [new ExtractTextPlugin("stylesMain.css")]
};

module.exports = config;
