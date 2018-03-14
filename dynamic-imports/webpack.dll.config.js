const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    //dependencia final
    modules:[
      'react','react-dom'
    ],
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    // como vamos a exportar un archivo este debe tener una referencia global para que lo pueda entender
    library:'[name]',
  },
  //Solo si se necesita los loaders para algun vendor en este caso react ya trae el codigo compilado para el navegador
  // module:{
  //   rules: [
  //     {
  //       //test: que tipo de archivo reconocer,
  //       //use: que loader se va a encargar del archivo
  //       test:/\.js$/,
  //       use:{
  //         loader: 'babel-loader',
  //         //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
  //         options: {
  //           presets: ['es2015','react']
  //         }
  //       }
  //     },
  //     //Aqui van los loaders
  //     {
  //       //test: que tipo de archivo reconocer,
  //       //use: que loader se va a encargar del archivo
  //       test:/\.css$/,
  //       //Indicamos los loaders que se van a extraer
  //       use: ExtractTextPlugin.extract({
  //         // ['style-loader','css-loader']
  //         // fallback: 'style-loader',
  //         use:[
  //           //Agregar configuraciones para css
  //           //Para hacerlos compatible con postcss
  //           //Mudules: Permita importar modulos
  //           //importLoaders: 1 le decimos que trabaje con un solo loaders en este caso postcss-loader
  //           {
  //             loader:'css-loader',
  //             options: {
  //               modules: true,
  //               importLoaders: 1
  //             }
  //           },
  //           'postcss-loader'
  //         ]
  //       }),
  //     },
  //     {
  //       test:/\.scss$/,
  //       use: ExtractTextPlugin.extract({
  //         use:["css-loader","sass-loader"]
  //       })
  //     },
  //     {
  //       test:/\.styl$/,
  //       use: ExtractTextPlugin.extract({
  //         use:[
  //           "css-loader",
  //           {
  //             loader: 'stylus-loader',
  //             //Agregando modulos externos mixins
  //             //Nib agrega prefijos para dar soporte a navegadores viejos
  //             //rupture dar soporte a media queries con una sintaxis mas sencilla
  //             options: {
  //               use: [
  //                 require('nib'),
  //                 require('rupture')
  //               ],
  //               //auto importar
  //               //
  //               import: [
  //                 //~ alias para entrar a la carpeta de node modules
  //                 '~nib/lib/nib/index.styl',
  //                 '~rupture/rupture/index.styl',
  //               ]
  //             }
  //           }
  //         ]
  //       })
  //     },
  //     {
  //       //test: que tipo de archivo reconocer,
  //       //use: que loader se va a encargar del archivo
  //       test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
  //       use:{
  //         loader: 'url-loader',
  //         //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
  //         options: {
  //           limit: 100000,
  //         }
  //       }
  //     },
  //     {
  //       test:/\.(json)$/,
  //       use:'json-loader'
  //     },
  //   ]
  // },
  plugins:[
    //Rutas donde va a exportar el archivo json para que el archivo principal
    //para que entienda cuales son las rutas que tienen mis dependencias comunes
    new webpack.DllPlugin({
      // este name es como que nombres vamos a exportar para que puedan ser usados como referencia
      name: "[name]",
      //__dirname directorio donde estoy ubicado
      //usamos los comodines de webpack
      //[name] obtenemos el nombre del paquete y crear mi json
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
}