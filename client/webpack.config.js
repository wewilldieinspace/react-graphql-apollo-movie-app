const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader'
            },
        ]
    },
    resolve: {
        extensions: [
            '.js', '.ts', '.tsx', '.json'
        ]
    },
    devServer: {
        port: 5000,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'source-map'
}