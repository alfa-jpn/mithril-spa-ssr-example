import path              from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const config = [{
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
},{
  context: path.resolve(__dirname, 'app', 'assets', 'stylesheets'),
  entry:   './app.scss',
  output: {
    path:       path.resolve(__dirname, 'public', 'assets', 'stylesheets'),
    publicPath: '/assets/stylesheets/',
    filename:   'bundle.css'
  },
  module: {
    rules: [{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 128,
          name:  'images/[hash].[ext]'
        }
      }]
    }, {
      test:    /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use:      ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}];

export default config;
