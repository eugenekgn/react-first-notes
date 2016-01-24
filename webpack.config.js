module.exports = {
    entry: './app/game/main.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle-github.js'
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