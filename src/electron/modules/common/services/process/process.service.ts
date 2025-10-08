import { spawn, SpawnOptionsWithoutStdio } from "child_process";
import { ProcessData } from "../../types";

export class ProcessService {

  public constructor() { }

  public async execute(
    command: string,
    args?: readonly string[] | undefined,
    options?: SpawnOptionsWithoutStdio | undefined
  ): Promise<ProcessData> {
    const child = spawn(command, args, options);
    let stdout = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    return new Promise((resolve, reject) => {
      child.on("error", (error) => {
        child.stdout.removeAllListeners();
        child.stderr.removeAllListeners();
        child.removeAllListeners();
        const processError: Error & Partial<ProcessData> = error;
        processError.stdout = stdout;
        processError.stderr = stderr;
        return reject(processError);
      });
      child.on("close", (code, signal) => {
        child.stdout.removeAllListeners();
        child.stderr.removeAllListeners();
        child.removeAllListeners();
        if (code === 0) return resolve({ exitCode: code, stdout, stderr, signal });
        const processError: Error & Partial<ProcessData> = new Error(`Process "${command} ${args}" exited with code ${code}`);
        processError.exitCode = code;
        processError.stdout = stdout;
        processError.stderr = stderr;
        processError.signal = signal;
        return reject(processError);
      });
    });
  }

}
