const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('jokes', {
  getJoke: () => ipcRenderer.invoke('get_joke'),
  sendJoke: (joke) => ipcRenderer.send('send_joke', joke)
})