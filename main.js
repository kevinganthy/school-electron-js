import { app, BrowserWindow, ipcMain, Notification } from 'electron';
import path from 'node:path';

const createWindow = () => {
  const win = new BrowserWindow({
    icon: './assets/icon.png',
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'preload.js')
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  ipcMain.handle('get_joke', async () => {
    const joke = await get_joke()
    notify(joke)
    return joke
  });
  ipcMain.on('send_joke', (_event, joke) => {
    save_joke(joke)
  })
})

const get_joke = async () => {
  const fs = await import('node:fs/promises')
  const jokes = JSON.parse(await fs.readFile('jokes.json', 'utf-8'))
  const randomIndex = Math.floor(Math.random() * jokes.length)
  return jokes[randomIndex]
}

const notify = (body) => {
  new Notification({ title: 'Joke', body: body }).show()
}

const save_joke = async (joke) => {
  const fs = await import('node:fs/promises')
  const jokes = JSON.parse(await fs.readFile('jokes.json', 'utf-8'))
  jokes.push(joke)
  await fs.writeFile('jokes.json', JSON.stringify(jokes, null, 2), 'utf-8')
  notify("Blague sauvegardée !")
}