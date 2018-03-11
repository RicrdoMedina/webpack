const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  //agregamos un objeto con nuestros entrypoints
  entry: {
    home: path.resolve(__dirname,'src/js/home.js'),
    precios: path.resolve(__dirname,'src/js/precios.js'),
    contacto: path.resolve(__dirname,'src/js/contacto.js'),
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/[name].js'
  },
  module:{
    rules: [
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
      }
    ]
  },
  plugins:[
    //Aqui van los plugins
    //Indicamos el nombre de archivo donde colocara el css
    new ExtractTextPlugin('css/[name].css'),
  ]
}