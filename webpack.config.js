const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'client', 'public');

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIR, 'index'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[name].js.map',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
        test: /\.s[ac]ss$/i,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        use: 'url-loader?limit=100000&name=images/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
