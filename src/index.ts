import { app, BrowserWindow, ipcMain } from 'electron'
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;
import { createConnection, getRepository, getConnection } from 'typeorm'
import options from '../src/config/database';
const electron = require('electron')


if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    fullscreen: false,
    fullscreenable:false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });
  
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);


  mainWindow.webContents.openDevTools();

  createConnection(options)
    .then((connection) => {
      //@ts-ignore
      global.Object.global = {
        'electron': electron,
        'ipcMain': ipcMain,
        'con': connection
      }
      require('./ipcs/user.ipc')
    })
    .catch(e => {
      console.log("error na conexão ", e)
    })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



