const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const baseConfig = {
   entry: {
       main: path.resolve(__dirname, './src/index.ts'),
   },
   mode: 'development',
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
  },
  plugins: [
   new HtmlWebpackPlugin({
       title: 'webpack Boilerplate',
       template: path.resolve(__dirname, './src/index.html'),
       filename: 'index.html',
   }),
   new CleanWebpackPlugin(),
   new EslintPlugin({ extensions: 'ts' }),
   ],
   module: {
      rules: [
          {
              test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
              type: 'asset/resource',
          },
          {
            test: /\.ts$/i,
            use: 'ts-loader'
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
      ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};