import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'preload.js')
    }
  })

  // Open devtools by default
  win.webContents.openDevTools()

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  
  ipcMain.handle('ping', () => 'pong')
  ipcMain.handle('ls', async () => {
    const fs = await import('node:fs/promises')
    const files = await fs.readdir(process.cwd())
    return files
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
      console.log("👋 App activated.")
  })

  console.log("🚀 Let's go with Electron")
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
  console.log("🫡 All windows closed, quitting app.")
})

