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
      }
    ]
  },
  // 缓存
  cache: {
    type: 'filesystem' // memory
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: 'all',
  //         name: 'commons'
  //       }
  //     }
  //   }
  // },
  experiments: {
    topLevelAwait: true,
    asset: true,
  }
}