const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('app', {
  openExternal: (url) => shell.openExternal(url)
});
