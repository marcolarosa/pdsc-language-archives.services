"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");

module.exports = {
    target: "web",
    mode: "development",
    devtool: "eval-source-map",
    entry: ["./src/vendor.js", "babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all"
                }
            }
        }
    },
    serve: {
        host: "0.0.0.0",
        port: "9000",
        devMiddleware: {
            writeToDisk: true
        },
        hotClient: {
            allEntries: true,
            host: {
                server: "192.168.56.2",
                client: "192.168.56.2"
            }
        },
        add: (app, middleware, options) => {
            const historyOptions = {};

            app.use(convert(history(historyOptions)));
        }
    },
    plugins: [
        new CleanWebpackPlugin(["dist/"], {
            watch: true,
            root: __dirname
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            title: "Inteja",
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: { compact: false }
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: "file-loader?name=res/[name].[ext]?[hash]"
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
            configuration: path.resolve(__dirname, "src/configuration"),
            directives: path.resolve(__dirname, "src/directives"),
            routes: path.resolve(__dirname, "src/routes/"),
            services: path.resolve(__dirname, "src/services"),
            store: path.resolve(__dirname, "src/store")
        }
    }
};