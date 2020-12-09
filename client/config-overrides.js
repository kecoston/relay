
module.exports = {
    devServer: function (configFunction) {
      return function (proxy, allowedHost) {
        const config = configFunction(proxy, allowedHost);
        config.disableHostCheck = true
        return config
      }
    }
  };