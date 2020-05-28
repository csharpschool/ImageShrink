const { app, BrowserWindow } = require('electron');

// Set and check environment
process.env.NODE_ENV = 'production';
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

// Window variables
let mainWindow;

// Create Window
createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: isDev ? 800 : 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_128x128.png`,
        resizable: isDev ? true : false,
        backgroundColor: 'white',
        webPreferences: { nodeIntegration: true }
    });

    if (isDev) mainWindow.webContents.openDevTools();

    mainWindow.loadFile('./app/index.html');
}

// Start Application
app.on('ready', () => {
    createMainWindow();

    mainWindow.on('close', () => (mainWindow = null));
});

// Keep application open on Mac when closing window
app.on('window-all-closed', () => { if (!isMac) app.quit(); });

// Make sure that a window exists when activating the application
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createMainWindow();
});
