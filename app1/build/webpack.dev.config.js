const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: ["@babel/polyfill", path.resolve(".", "src", "index.js")],
  },
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve(".", "src"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: "0.0.0.0",
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
