'use strict';

/**
 * egg-sftp default config
 * @member Config#sftp
 * @property {String} SOME_KEY - some description
 */
exports.sftp = {
  default: {
    host: '127.0.0.1', // prefix for redis keys
    port: '22', // milliseconds
    username: '',
    password: '',
  },
  useAgent: false,
};

