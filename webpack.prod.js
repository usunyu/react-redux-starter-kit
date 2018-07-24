const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
        }),
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.[chunkhash:8].js',
        hash: true,
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?minimize',
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
