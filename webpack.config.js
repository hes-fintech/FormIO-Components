const path = require('path');
const webpack = require('webpack');

const {
  version,
  name,
  license,
  repository,
  author,
} = require('./package.json');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: "@hes/formio-components",
    libraryTarget: 'umd',
    clean: true
  },
module: {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: ['@babel/proposal-class-properties']
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ]
},
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
};