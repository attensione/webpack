const path = require('path');

module.export = {
    entry: {
        main: path.join(__dirname, '/react.ts'),
    },
    output: {
        filename: 'react.js',
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};