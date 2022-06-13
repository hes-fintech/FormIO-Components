const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'index.js';
module.exports = config;
