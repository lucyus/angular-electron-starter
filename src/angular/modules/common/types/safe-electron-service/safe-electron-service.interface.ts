import type { ElectronApi } from '../../interfaces';
import type { ElectronService } from '../../services';

export type SafeElectronService = ElectronService & {
  readonly api: ElectronApi;
}
