const path = require('path');

module.exports = function (_env, argv) {

  const isProduction = argv.mode === "production";
  const envName = isProduction ? "production" : "development";
  const isDevelopment = !isProduction;

  return { 
    mode: envName,
    devtool: isDevelopment && "cheap-module-source-map",
    entry: path.join(__dirname, 'src'),
    watch: true,
    
    output: {
      path: path.join(__dirname, 'dist', 'js'),
      publicPath: '/js/',
      filename: "symbola.js",
      chunkFilename: '[name].js'
    },
    
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          exclude: [
            path.resolve(__dirname, 'node_modules')
          ],
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: envName,
            presets: [
              ["@babel/env", {
                "targets": {
                  "browsers": "last 2 chrome versions"
                }
              }],
              ["@babel/preset-react", {
                "targets": {
                  "browsers": "last 2 chrome versions"
                }
              }]          
            ]
          }
        },
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', // Injects styles into the DOM.
            'css-loader', // Interprets @import and url() like import/require() and resolves them.
            {
              loader: 'postcss-loader', // Processes CSS with PostCSS.
              options: {
                postcssOptions: {
                  plugins: () => [
                    require("autoprefixer")(),
                    require("postcss-preset-env")()
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
              'style-loader', // Injects CSS into the DOM
              'css-loader', // Translates CSS into CommonJS
              'less-loader' // Compiles Less to CSS
          ]
      }    
    ]
    },
    
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },

    plugins: [].filter(Boolean),
    
    devServer: {
      contentBase: path.join(__dirname, '/dist/'),
      inline: true,
      host: 'localhost',
      port: 8080,
    },

    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      },
    },
  }
};