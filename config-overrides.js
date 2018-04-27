const rewireTypescript = require('./tools/cra-rewire-typescript');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireEmotion = require('react-app-rewire-emotion');

module.exports = function override(config, env) {

    config = rewireReactHotLoader(config, env);

    config = rewireTypescript(config, env);


    const emotionBabelOptions = {
        "extractStatic": false //TODO change
    };

    config = rewireEmotion(config, env, emotionBabelOptions);

    return config;
};