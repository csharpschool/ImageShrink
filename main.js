const { app, BrowserWindow, Menu } = require('electron');

// Set and check environment
process.env.NODE_ENV = 'development'; // development | production
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

// Window variables
let mainWindow;

// Create Window
const { createMainWindow } = require('./app/modules/mainWindow');

// Create Menu and About Window
const { createMenu } = require('./app/modules/menu');


// Start Application
app.on('ready', () => {
    mainWindow = createMainWindow(isDev);
    mainWindow.on('close', () => (mainWindow = null));

    // Add Menu and About Window
    const menu = createMenu(isMac, isDev);
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

});

// Keep application open on Mac when closing window
app.on('window-all-closed', () => { if (!isMac) app.quit(); });

// Make sure that a window exists when activating the application
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createMainWindow(isDev);
});

app.allowRendererProcessReuse = true;