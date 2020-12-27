import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('electron-referer')('https://animesvision.biz')

let mainWindow: Electron.BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Animes-BR Player',
    width: 800,
    height: 600,
    minWidth: 672,
    minHeight: 548,
    autoHideMenuBar: true,
    backgroundColor: '#282a36',
    webPreferences: {
      devTools: process.env.NODE_ENV === 'development',
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.setMenuBarVisibility(false)

    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.allowRendererProcessReuse = true
