const PUBLIC_PATH = require('path').join(__dirname, 'build');

module.exports = {
    entry: './app/index.js',
    output: { 
        path: PUBLIC_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: PUBLIC_PATH,
        port: 3000
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
