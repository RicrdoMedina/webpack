const webpack = require('webpack')

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  devServer:{
    //Indicamos al dev server que use el HotModuleReplacement
    hot: true,
  },
  module:{
    rules: [
      {
        test: /\.css$/, 
        use:['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    //Activar HotModuleReplacement
    new webpack.HotModuleReplacementPlugin()
  ]
}