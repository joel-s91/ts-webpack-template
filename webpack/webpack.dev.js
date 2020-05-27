const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack.config");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: 8080,
        contentBase: "./src/static",
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
