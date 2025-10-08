import type * as FsModule from 'node:fs';

export interface ElectronApi {
  fs: () => typeof FsModule;
  process: () => NodeJS.Process;
};
