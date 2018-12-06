'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var redisConfig = {
  host: process.env.DATA_REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  timeout: process.env.REDIS_TIMOUT || 120
};

exports.redisConfig = redisConfig;