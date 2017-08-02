'use strict';
const electron = require('electron');
const globalShortcut = require("electron").globalShortcut;
const autoClicker = require("./autoclicker.js");

const app = electron.app;

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 450,
		height: 250,
		title: "Autoclicker by Pixel Studios"
	});

	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	globalShortcut.register("CommandOrControl+Alt+A", () => {
		autoClicker.toggle();
	});

	mainWindow = createMainWindow();
});
