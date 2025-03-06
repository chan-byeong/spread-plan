// public/electron/preload.js
import { contextBridge, ipcRenderer } from "electron";

// 반드시 contextBridge를 사용하여 API를 노출해야 함
contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    invoke: (channel, data) => {
      const validChannels = ["ping", "get-data"];
      if (validChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, data);
      }
    },
    on: (channel, func) => {
      const validChannels = ["notification"];
      if (validChannels.includes(channel)) {
        const subscription = (_, ...args) => func(...args);
        ipcRenderer.on(channel, subscription);
        return () => {
          ipcRenderer.removeListener(channel, subscription);
        };
      }
    },
  },
});
