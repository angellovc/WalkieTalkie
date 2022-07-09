const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  mode: "production",
  target:'node',
  devtool: "inline-source-map",
  entry: {
    main: "./client.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "client.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [ nodeExternals() ],
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};