"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
let win;
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({ fullscreen: true });
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/SmartDisplay/index.html`),
        protocol: 'file:',
        slashes: true,
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}
//# sourceMappingURL=main.js.map