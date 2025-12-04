import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { getUsers, isUserExist, addUser } from './ipc/users.js';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'preload.js'),
      // Empêche l'accès direct à Node.js dans le renderer (sécurité)
      contextIsolation: true,
      // Désactive le nodeIntegration dans le renderer
      nodeIntegration: false
    }
  })

  // Utilise maintenant le frontend de Vite
  if ( app.isPackaged ) {
    win.loadFile(path.join(process.cwd(), 'dist/index.html'))
  } else {
    win.loadURL('http://localhost:5173')
  }

  win.webContents.openDevTools();
  return win;
}

app.whenReady().then(() => {
  const mainWindow = createWindow()

  ipcMain.handle('users:get', getUsers);
  ipcMain.handle('users:exist', (_event, username) => isUserExist(username));
  ipcMain.on('users:add', (_event, user) => {
    const result = addUser(user)
    // Bonus
    if (result) {
      mainWindow.webContents.send('users:added', user);
    }      
    return result;
  });
})