const path = require('path');
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const sourceMap = true;

module.exports = {
    stats: {warnings:false},
    mode: "development",
    devtool: sourceMap ? "source-map" : false,
    entry: {
        'bioz_sino_if_banner_widget': path.resolve(__dirname, "./src/index")
    },
    output: {
        path: path.resolve(__dirname, "test-server/public/dist"),
        filename: "[name].js",
        chunkFilename: "[id]-[hash].js",
        library: 'Bioz_sino_if_banner_Widget',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: sourceMap
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {}
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                include: path.resolve(__dirname, './src/styles/'),
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                include: path.resolve(__dirname, './node_modules/jquery-ui-dist/images/'),
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, './node_modules/font-awesome/fonts/'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ],
    optimization: {
        minimizer: [
            "...", // Extend existing minimizers
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dev-server'),
        },
        port: 8080,
    },
};
