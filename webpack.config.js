const path = require('path');

module.exports = {
  entry: path.join(__dirname, "Iframe", "index.jsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/react'],
            plugins: ['@babel/proposal-class-properties']
          }
        }
      },
    ]
  },
}