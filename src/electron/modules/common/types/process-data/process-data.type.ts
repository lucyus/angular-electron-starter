export type ProcessData = {
  exitCode: number | null,
  stdout: string,
  stderr: string,
  signal: NodeJS.Signals | null,
};
