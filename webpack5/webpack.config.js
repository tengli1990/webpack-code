const  path = require('path');
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    // assetModuleFilename:'images/[name].[hash:5][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: path.resolve(__dirname, 'loaders/babel-loader.js'),
          options: {
            data: '我是配置loader的 options'
          }
        }]
      }
    ]
  },
  // 缓存
  cache: {
    type: 'filesystem' // memory
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'commons'
        }
      }
    }
  },
  experiments: {
    topLevelAwait: true,
    asset: true,
  }
}