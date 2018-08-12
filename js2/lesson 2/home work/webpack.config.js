const PUBLIC_PATH = require('path').join(__dirname, 'client');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js'
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
  }
};
