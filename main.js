const { app, BrowserWindow } = require('electron');

// Set and check environment
process.env.NODE_ENV = 'development'; // production
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

// Window variables
let mainWindow;

// Create Window
const { createMainWindow } = require('./app/modules/mainWindow');


// Start Application
app.on('ready', () => {
    mainWindow = createMainWindow(isDev);

    mainWindow.on('close', () => (mainWindow = null));
});

// Keep application open on Mac when closing window
app.on('window-all-closed', () => { if (!isMac) app.quit(); });

// Make sure that a window exists when activating the application
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createMainWindow();
});

app.allowRendererProcessReuse = true;