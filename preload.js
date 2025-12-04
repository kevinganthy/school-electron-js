const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  getUsers: () => ipcRenderer.invoke('users:get'),
  isUserExist: (username) => ipcRenderer.invoke('users:exist', username),
  addUser: (user) => ipcRenderer.send('users:add', user),

  // Bonus
  onUserAdded: (callback) => ipcRenderer.on('users:added', callback),
})