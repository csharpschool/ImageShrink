/* Electron */
const { ipcRenderer, shell } = require('electron');

/* Image modules */
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

/* Slash - Path assembler */
const slash = require('slash');

module.exports = {
    shrinkImage: async ({ imgPath, quality, dest }) => {
        try {
            const pngQuality = quality / 100

            const files = await imagemin([slash(imgPath)], {
                destination: dest,
                plugins: [
                    imageminMozjpeg({ quality }),
                    imageminPngquant({
                        quality: [pngQuality, pngQuality],
                    }),
                ],
            })

            /* Open the folder */
            shell.openPath(dest)

            /* Communicate with the alert */
            mainWindow.webContents.send('image:done');
        }
        catch (err) {
            log.error(err)
        }
    }
    /* ,resizeImage : (imgPath, quality) =>
    ipcRenderer.send('image:minimize', {
        imgPath,
        quality,
    }) */
}

// Resizing the image is done (callback)
/* ipcRenderer.on('image:done', () =>
    document.getElementById('alert').innerHTML =
    `Image resized to <strong>${slider.value}%</strong> quality`
); */

