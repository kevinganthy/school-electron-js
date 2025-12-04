import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  console.log("🚀 Let's go with Electron")

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    console.log("👋 App activated.")
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
  console.log("🫡 All windows closed, quitting app.")
})

