const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/app.jsx'
  ],

  output: {
    publicPath: '/',
    path: path.join(__dirname, "/"),
    filename: 'bundle.js',
    chunkFilename: 'chunk/[chunkhash].js',
  },

  module: {
    rules: [
      // jsx
      {
        test: [
          /\.jsx?$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: {
          loader: "babel-loader",
        },
      },
      // css(sass) include node_modules
      {
        test: /node_modules\/.*\.(css|s[ac]ss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      // css exclude node_modules
      {
        test: [
          /\.css$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
      // yaml
      {
        test: [
          /\.ya?ml$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: [
          {
            loader: 'js-yaml-loader',
          }
        ],
      },
      // binary
      {
        test: [
          /\.(png|jpg|gif|ttf|svg|eot|woff)$/
        ],
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      // @see https://github.com/webpack/webpack/issues/11467
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        }
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.yml', '.yaml'],
    modules: [
      path.resolve('./src'),
      "node_modules"
    ],
    alias: {
      '@src': path.resolve('./src'),
    }
  },

  //webpack-dev-server
  devServer: {
    contentBase: [
      // index.html(React root)
      path.join(__dirname, 'public/'),
      // static files(img, js, css)
      path.join(__dirname, '../site/public/webroot'),
    ],

    historyApiFallback: {
      rewrites: [
        { from: /^\/*$/, to: 'public/index.html' }
      ]
    },

    disableHostCheck: true,
    watchContentBase: true,
    hot: true,
    open: true,
    openPage: "",
    host: "0.0.0.0",
    port: 8000,
  }
};