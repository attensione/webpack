const PATH = require('path');

module.export = {
    entry: PATH.resolve(__dirname, 'src'),
    output: {
        path: PATH.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            loader: 'ts-loader',
            test: /\.tsx?$/,
            exclude: /node_modules/,
        }, ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};