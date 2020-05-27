require("webpack");
const merge = require("webpack-merge");
const TerserJSPlugin = require("terser-webpack-plugin");

const common = require("./webpack.config");

module.exports = merge(common, {
    module: {
        rules: [],
    },
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin()],
    },
});
