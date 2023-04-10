const sftp = require('./lib/sftp');
module.exports = class {
  constructor(app) {
    this.app = app;
  }

  configDidLoad() {
    sftp(this.app);
  }
};
