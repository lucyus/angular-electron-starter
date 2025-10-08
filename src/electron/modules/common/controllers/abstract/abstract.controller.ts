export abstract class AbstractController {

  public constructor() { }

  protected abstract _run(): Promise<void>;
  protected abstract _proceed(): Promise<boolean>;

  public async start(): Promise<boolean> {
    await this._run();
    return this._proceed();
  }

}
