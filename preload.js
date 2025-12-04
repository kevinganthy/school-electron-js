const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  // Première partie avec var statiques
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // Deuxieme partie avec communication
  ping: () => ipcRenderer.invoke('ping'),
  ls: () => ipcRenderer.invoke('ls')
})