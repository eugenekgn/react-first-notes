module.exports = {
    entry: './app/main.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            }
        ]
    }
};