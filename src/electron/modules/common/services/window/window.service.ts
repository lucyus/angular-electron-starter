import { BrowserWindow } from "electron";
import { watch } from "fs";
import { OpenWindowOptions } from "../../types";
import { CommonConfiguration } from "../../configuration";

export class WindowService {

  public constructor() { }

  public async open(options?: OpenWindowOptions): Promise<BrowserWindow> {
    // Open the window
    const window = new BrowserWindow(options?.window);
    // Load the index.html into the window
    const windowReady = window.loadFile(CommonConfiguration.indexPath).then(async () => {
      // Manage SPA routing
      if (options?.spa?.route && options.spa.route !== "/") {
        await window.webContents.executeJavaScript(`
          window.history.replaceState(null, "", ".${options.spa.route}");
          window.dispatchEvent(new Event('popstate'));
        `);
      }
      // Reload the index.html on file changes
      if (options?.spa?.hotReload) {
        watch(CommonConfiguration.BROWSER_SOURCE_PATH, { recursive: true }, () => {
          window.webContents.reload();
        });
      }
    });
    // Handle Electron reloads with SPA routing
    window.webContents.on("did-fail-load", async (event, errorCode, errorDescription, validatedURL, isMainFrame, frameProcessId, frameRoutingId) => {
      await window.loadFile(CommonConfiguration.indexPath);
      const route = validatedURL.replace(
        new RegExp(`.*${CommonConfiguration.BROWSER_SOURCE_PATH.replace(/\\/g, "/")}`),
        ""
      ) || "/";
      await window.webContents.executeJavaScript(`
        window.history.replaceState(null, "", ".${route}");
        window.dispatchEvent(new Event('popstate'));
      `);
    });
    // Return the window once it's ready (opened + loaded)
    await windowReady;
    return window;
  }

}
