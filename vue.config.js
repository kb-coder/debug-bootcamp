const path = require('path')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = {
  publicPath: '/',
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  crossorigin: 'use-credentials',
  lintOnSave: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool('source-map')
    } else if (process.env.NODE_ENV === 'test') {
      config.devtool('cheap-module-eval-source-map')
    }

    // these settings apply to production or development, but will break unit tests in the test
    // NODE_ENV
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
      // By default vue-cli sets rel=prefetch on chunks-vendor.js and app.js in the index.html that
      // gets generated in index.html. This setting removes vue-cli's this default so we can use
      // more chunks and let them be loaded dynamically.
      config.plugins.delete('prefetch')
      config.plugin('prefetch')
        .use(PreloadWebpackPlugin, [{
          rel: 'prefetch',
          include: 'asyncChunks',
          // do not prefetch async routes
          fileBlacklist: [
            /myasyncRoute(.)+?\.js$/,
            /\.map$/
          ]
        },
        {
          rel: 'preload',
          include: 'initial',
          fileWhitelist: [
            /(^@vue)(.*)(\.js$)/,
            /(^vue)(.*)(\.js$)/
          ],
          // do not preload map files or hot update files
          fileBlacklist: [
            /\.map$/,
            /hot-update\.js$/
          ]
        }])

      // override vue's default chunks because their chunking is too big.
      config.optimization.delete('splitChunks')
      config.optimization.set('splitChunks', {
        cacheGroups: {
          // Vue modules
          vue: {
            test: /[\\/]node_modules[\\/](@vue.*|vue.*)[\\/]/,
            name: 'vue',
            enforce: true,
            priority: 20,
            chunks: 'initial'
          },
          // all other modules modules
          vendors: {
            name: 'chunk-vendors',
            test (module) {
              // `module.resource` contains the absolute path of the file on disk.
              // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
              return module.resource &&
              !module.resource.includes(`${path.sep}node_modules${path.sep}@vue`) &&
              !module.resource.includes(`${path.sep}node_modules${path.sep}vue`) &&
              !module.resource.includes(`${path.sep}src${path.sep}`)
            },
            maxSize: 500000,
            priority: 10,
            enforce: true,
            chunks: 'all' // doesn't get created without 'all' here
          },
          // default common chunk settings from Vue
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: 5,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      })

      // Webpack includes a small piece of runtime code that gets inserted into the last chunk
      // created. This could cause our vendor chunk to change unnecessarily. So the next line
      // causes this runtime to be put in a separate file.
      config.optimization.set('runtimeChunk', true)

      // load global sass files
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach((item) => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: [
              path.resolve(__dirname, 'src/sass/site.scss')
            ]
          })
          .end()
      })
    }
  }
}
