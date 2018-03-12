const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: './dist/',
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
            presets: ['es2015']
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
        //test: que tipo de archivo reconocer,
        //use: que loader se va a encargar del archivo
        test:/\.(mp4|webm)$/,
        use:{
          //usamos file-loader que es el que se encarga para exportar los archivos a sus directorios
          //url-loader solo sirve para poner archivos en base64
          loader: 'file-loader',
          //Limit especifica el peso del archivo si lo supera exporta el archivo a un directorio con name
          options: {
            limit: 100000,
            //Especifica el nombre que tendra el archivo cuando sea exportado
            //el comodin name es para que tome el mismo nombre del archivo fuente
            //hash le agrega un hash al archvio para que siempre sea distinto para el navegador
            //La ext tambien tiene un comodin para que exporte cualquier video con su extension
            name: './video/[name].[hash].[ext]'
          }
        }
      },
    ]
  },
  plugins:[
    //Aqui van los plugins
    //Indicamos el nombre de archivo donde colocara el css
    new ExtractTextPlugin('css/[name].css'),
  ]
}