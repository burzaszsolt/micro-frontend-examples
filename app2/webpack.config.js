const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

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
    port: 3002,
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
    new ModuleFederationPlugin({
      name: "mfApp2",
      library: { type: "var", name: "mfApp2" },
      filename: "remoteEntry.js",
      exposes: {
        "./App2Service": "./src/App2Service",
      },
      shared: {
        // ...deps,
        // react: {
        //   singleton: true,
        //   requiredVersion: deps.react,
        // },
        // "react-dom": {
        //   singleton: true,
        //   requiredVersion: deps["react-dom"],
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
