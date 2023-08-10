const webpack = require('webpack');

module.exports = function override(config, env) {
  // add a fallback for the 'stream' and 'assert' modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/'),
  };

  return config;
};
