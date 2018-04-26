const rewireTypescript = require('./tools/cra-rewire-typescript');

module.exports = function override(config, env) {

    config = rewireTypescript(config, env);

    //do stuff with the webpack config...
    return config;
};