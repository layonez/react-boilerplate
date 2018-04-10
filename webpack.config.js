const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { PATHS, globalVars } = require('./build-constants.js');

const stringifyObject = (obj) => {
  let stringifiedObj = {};
  for (let propName in obj) {
    stringifiedObj[propName] = JSON.stringify(obj[propName]);
  }

  return stringifiedObj;
};

const webpackConfig = {
  entry: {
    console: path.resolve(PATHS.src, './index.js'),
  },
  output: {
    path: PATHS.buildFolder,
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'cheap-inline-module-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint',
            options: {
              failOnWarning: false,
              failOnError: false,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[folder]__[local]__[hash:base64:6]',
              },
            },
            'postcss',
          ],
        })),
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        include: PATHS.images,
        use: [
          {
            loader: 'url',
            options: {
              limit: 2,
              outputPath: 'images/',
              name: '[name]-[sha512:hash:base64:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  node: {
    constants: false
  },
  resolve: {
    modules: [
      'node_modules',
      PATHS.src,

      PATHS.images + '/' + globalVars.__reseller__ + '/' + globalVars.__theme__,
      PATHS.images + '/' + globalVars.__reseller__,
      PATHS.images,
    ],
    extensions: ['.js', '.jsx', '.json', '.svg', '.png'],
  },
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.loader.js', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      path: PATHS.buildFolder,
      favicon: PATHS.images + '/' + globalVars.__reseller__ + '/favicon.png',
    }),
    new webpack.DefinePlugin(stringifyObject(globalVars)),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new StyleLintPlugin({
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: true,
    }),
  ],
  devServer: {
    contentBase: PATHS.buildFolder,
    https: true,
    open: false,
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    proxy: {
      '/api/*': {
        target: 'https://185.12.28.89',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
      },
    },
  },
};

module.exports = webpackConfig;
