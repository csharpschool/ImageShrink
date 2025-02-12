const { createAboutWindow } = require('./aboutWindow');

const menu = [];

createMacMenu = () => {
    menu.push(...[{
        role: 'fileMenu',
    },
    {
        label: app.name,
        submenu: [
            {
                label: 'About',
                click: createAboutWindow,
            },
        ],
    }
    ]);
}

createOtherMenu = () => {
    menu.push(...[{
        role: 'fileMenu',
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click: createAboutWindow,
            },
        ],
    }
    ]);
}

createDeveloperMenu = () => {
    menu.push({
        label: 'Developer',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' },
            { role: 'toggledevtools' },
        ],
    });
}

createMenu = (isMac, isDev) => {
    if(isMac) createMacMenu();
    else createOtherMenu();

    if(isDev) createDeveloperMenu();

    return menu;
}

module.exports = { createMenu };