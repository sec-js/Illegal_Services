const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('app', {
  getLinks: () => ipcRenderer.invoke('links:get'),
  openExternal: (url) => ipcRenderer.invoke('shell:open-external', url)
});
