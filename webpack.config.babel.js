import path from 'path';

const config = {
  context: path.resolve(__dirname, 'app'),
  entry:   './app.js',
  output: {
    path:       path.resolve(__dirname, 'public', 'assets', 'javascripts'),
    publicPath: '/assets/javascripts/',
    filename:   'bundle.js'
  },
  module: {
    rules: [{
      test:    /\.jsx?$/,
      exclude: /node_modules/,
      use:     ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port:        3000
  }
};

export default config;

