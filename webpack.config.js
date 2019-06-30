const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, arg) => {
  const isProductionMode = arg.mode === 'production'

  const baseConfig = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
  
  const devConfig = {      
    plugins: [
      new CleanWebpackPlugin()
    ],
    watch: true
  }

  return isProductionMode
    ? baseConfig
    : { ...baseConfig, ...devConfig }
}