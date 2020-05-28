const { BrowserWindow } = require('electron');

createMainWindow = (isDev) => {
    
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: isDev ? 800 : 400,
        height: 530,
        icon: `./assets/icons/Icon_128x128.png`,
        resizable: isDev ? true : false,
        backgroundColor: 'white',
        webPreferences: { nodeIntegration: true }
    });
    
    if (isDev) mainWindow.webContents.openDevTools();
    
    mainWindow.loadFile('./app/index.html');

    return mainWindow;
}

module.exports = { createMainWindow }