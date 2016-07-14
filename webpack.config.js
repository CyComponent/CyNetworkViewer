var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: path.resolve(__dirname, "src/CyNetworkViewer.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    library: "CyNetworkViewer",
    libraryTarget: "umd",
    filename: "CyNetworkViewer.js",
  },
  externals: {
    "react":"React",
    "react-dom":"ReactDOM",
    'react-addons-transition-group': 'var React.addons.TransitionGroup',
    'react-addons-pure-render-mixin': 'var React.addons.PureRenderMixin',
    'react-addons-create-fragment': 'var React.addons.createFragment',
    'react-addons-update': 'var React.addons.update'
  },
  resolve: {
    root: __dirname,
    moduleDirectories: ["node_modules", "./src"],
    extensions: ["", ".js", ".jsx", ".webpack.js", ".css", ".scss"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loaders: ["url"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
