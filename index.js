'use strict';
const electron = require('electron');
const autoClicker = require("./autoclicker.js");
const globalShortcut = require("electron").globalShortcut;

const app = electron.app;
// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 450,
		height: 250,
		title: "Autoclicker by Pixel Studios"
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		clearInterval(autoClicker.interval);
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

	console.log("hello");
	mainWindow = createMainWindow();
});
