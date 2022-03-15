var glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    watch: false,
    entry: {
        core: glob.sync('./src/**/*.ts*'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js'),
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '../css/[name].css',
    })],
    optimization: {
        minimizer: [
            new TerserPlugin({ parallel: true }),
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 80,
    },
};
