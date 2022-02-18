var glob = require('glob');
const path = require('path');

module.exports = {
    watch: true,
    entry: {
        //core: './src/core.ts', //one-file-loader
        //core: ['./src/core.ts', './src/test.ts'], //files-from-table-loader
        core: glob.sync('./src/**/*.ts*'), //all-files-from-folder-loader require var glob = require('glob');
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 80,
    },
};