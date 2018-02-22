const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const Tray = electron.Tray
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 318, height: 306, skipTaskbar: true, frame: false, transparent: true, hasShadow: false})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
  // Hide dock icon.
  if(process.platform === 'darwin') {
    app.dock.hide();
  }

  tray = new Tray(path.join(__dirname, './icons/iconTemplate.png'))
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Invert Colors', type: 'checkbox', checked: false, click(item) {
        console.log("Hey you clicked invert! " + item.checked);
        mainWindow.webContents.executeJavaScript('invertColors()');
    }},
    {label: 'Flip Direction', type: 'checkbox', click(item) {
        console.log("Hey you clicked flip! " + item.checked);
        mainWindow.webContents.executeJavaScript('flipDirection()');
    }},
    {label: 'Quit', click () { app.quit(); }}
  ])
  tray.setToolTip('Hey~!')
  tray.setContextMenu(contextMenu)
})



// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
