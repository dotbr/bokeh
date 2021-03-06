// Generated by CoffeeScript 1.7.1
(function() {
  var Redis, redis;

  redis = require("redis");

  module.exports = Redis = (function() {
    function Redis(options) {
      this.options = options;
      this.client = redis.createClient(this.options.port, this.options.host);
    }

    Redis.prototype.write = function(key, data, callback) {
      return this.client.hset(this.options.bucket, key, data, callback);
    };

    Redis.prototype.read = function(key, callback) {
      return this.client.hget(this.options.bucket, key, callback);
    };

    Redis.prototype["delete"] = function(key, callback) {
      return this.client.hdel(this.options.bucket, key, callback);
    };

    Redis.prototype.keys = function(callback) {
      return this.client.hkeys(this.options.bucket, callback);
    };

    return Redis;

  })();

}).call(this);
