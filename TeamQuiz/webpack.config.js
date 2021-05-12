const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    target: "web",
    devtool: "cheap-module-source-map",
    entry: { main: "./wwwroot/index" },
    output: {
        path: path.resolve(__dirname, "./wwwroot/dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {"Access-Control-Allow-Origin": "*"},
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./wwwroot/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {"presets": ["@babel/preset-env", "@babel/preset-react"]}
                }
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader", "eslint-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
