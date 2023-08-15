const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MySeatBookingLibrary', // Name of the library when used in browser globals
    libraryTarget: 'umd', // Universal Module Definition (UMD) format
    umdNamedDefine: true, // Give the UMD build a named define for AMD
    globalObject: 'this', // Set the global object for both browsers and Node.js
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

