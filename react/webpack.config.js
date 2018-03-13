const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        //test: que tipo de archivo reconocer,
        //use: que loader se va a encargar del archivo
        test:/\.js$/,
        use:{
          loader: 'babel-loader',
          //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
          options: {
            presets: ['es2015','react']
          }
        }
      },
      //Aqui van los loaders
      {
        //test: que tipo de archivo reconocer,
        //use: que loader se va a encargar del archivo
        test:/\.css$/,
        //Indicamos los loaders que se van a extraer
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use:'css-loader'
        }),
      },
      {
        //test: que tipo de archivo reconocer,
        //use: que loader se va a encargar del archivo
        test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use:{
          loader: 'url-loader',
          //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
          options: {
            limit: 100000,
          }
        }
      },
      {
        test:/\.(json)$/,
        use:'json-loader'
      },
    ]
  },
  plugins:[
    //Aqui van los plugins
    //Indicamos el nombre de archivo donde colocara el css
    new ExtractTextPlugin('css/[name].css'),
  ]
}