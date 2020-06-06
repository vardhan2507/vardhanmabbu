const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const keys = Object.keys(process.env);
const env = {};
keys.forEach(key => env[key] = JSON.stringify(process.env[key]));

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'ENV_VARS': env,
            'process.env': env
        }
        ),
        new Dotenv({
            silent: true,
            systemvars: true
        })
    ]
};
