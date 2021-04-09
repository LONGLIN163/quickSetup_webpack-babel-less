const path = require('path');

module.exports = {
    mode: "development", // ***if dont set mode, it would not translate es6 to es5***
    entry: "./app/main",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'all.js'
    },
    module: { //mount all needed loaders here
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', // this loader comes from webpack
                options: {
                    presets: [
                        // ***if use babel 7, here like this, not need install babel-preset-es2015....any more***
                        ["@babel/preset-env"]
                    ]
                }
            }
        },
        {
            test: /\.less$/i,
            use: [
                //***need to install all three***
                "style-loader",
                "css-loader",
                "less-loader"
            ],
        }
      ]
    },
    watch: true
};