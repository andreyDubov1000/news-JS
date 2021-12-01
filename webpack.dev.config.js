const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.[tj]s$/,
                use: ['source-map-loader'],
            }]},
};
