var path = require('path')
var webpack = require('webpack')
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  optimization: {
    usedExports: true,
    minimize: true, //Update this to true or false
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-scroller': path.resolve(__dirname, './src')
    }
  }
}

if (process.env.NODE_ENV === 'production') {

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ])

  if (process.env.BUILD === 'publish') {
    module.exports.entry = './src/index.js'
    module.exports.output = {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-infinite-scroller.min.js',
      library: 'vueInfiniteScroller',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }

    module.exports.resolve = {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    }
  }
}
