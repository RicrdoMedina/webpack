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
          // fallback: 'style-loader',
          use:[
            //Agregar configuraciones para css
            //Para hacerlos compatible con postcss
            //Mudules: Permita importar modulos
            //importLoaders: 1 le decimos que trabaje con un solo loaders en este caso postcss-loader
            {
              loader:'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }),
      },
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          use:["css-loader","sass-loader"]
        })
      },
      {
        test:/\.styl$/,
        use: ExtractTextPlugin.extract({
          use:[
            "css-loader",
            {
              loader: 'stylus-loader',
              //Agregando modulos externos mixins
              //Nib agrega prefijos para dar soporte a navegadores viejos
              //rupture dar soporte a media queries con una sintaxis mas sencilla
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                //auto importar
                //
                import: [
                  //~ alias para entrar a la carpeta de node modules
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl',
                ]
              }
            }
          ]
        })
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