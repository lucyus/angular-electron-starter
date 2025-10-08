import { contextBridge } from "electron";
import fs from "fs";

contextBridge.exposeInMainWorld("electron", {
  process: () => process,
  fs: () => fs,
});
