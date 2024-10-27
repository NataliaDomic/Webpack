module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     contentBase: './dist',
     hot: true,
     static: './dist',
     port: 3001,
     stats: {
        children: false,
     }
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };
devtool: 'inline-source-map',
