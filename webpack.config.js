var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['react', 'babel-loader'],
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};