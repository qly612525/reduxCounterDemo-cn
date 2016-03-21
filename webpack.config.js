var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.js',
        react: 'react'
    },
    devtool: debug ? "inline-sourcemap" : null,
    output: {
        path: __dirname,
        filename: "[name].min.js",
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react'],
            minChunks: Infinity
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};
