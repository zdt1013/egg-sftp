const SftpClient = require('ssh2-sftp-client');
const assert = require('assert');

function checkConfig(config) {
  assert(config.host, '[egg-sftp] Must set  `host`');
  assert(config.port, '[egg-sftp] Must set  `port`');
  assert(config.username, '[egg-sftp] Must set  `username`');
  assert(config.password, '[egg-sftp] Must set  `password`');
}

module.exports = app => {
  app.addSingleton('sftp', config => {
    config = Object.assign({}, config);
    checkConfig(config);
    const sftpClient = new SftpClient();
    sftpClient.connect({
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
    }).catch(function(err) {
      console.log(err);
    });
    return sftpClient;
  });
  app.createSftp = app.sftp.createInstance.bind(app.sftp);
};

