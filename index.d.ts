import SftpClient from 'ssh2-sftp-client';

export { SftpClient };

declare module 'egg' {
  interface Application {
    sftp: { get(id: string): SftpClient } & SftpClient;
  }

  interface Context {
    sftp: Application['sftp'];
  }
}