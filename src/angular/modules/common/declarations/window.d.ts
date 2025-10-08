import { ElectronApi } from '../interfaces';

declare global {
  interface Window {
    electron?: ElectronApi;
  }
}
