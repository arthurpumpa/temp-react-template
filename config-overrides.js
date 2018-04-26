const rewireTypescript = require('./tools/cra-rewire-typescript');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {

    config = rewireReactHotLoader(config, env);
    config = rewireTypescript(config, env);

    //do stuff with the webpack config...
    return config;
};