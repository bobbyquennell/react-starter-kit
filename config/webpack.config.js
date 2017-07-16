var path = require('path');
//add support to create index.html automatically base on the ouput configuration
//see link below for more details
//https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '../dist/'
    },
    plugins:[
        // Create HTML file that includes references to bundled CSS and JS.
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
};
