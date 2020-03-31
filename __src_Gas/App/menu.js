/* eslint-disable max-lines-per-function */

import { randomExternal, randomLocal, randomHub } from './experiments';
import {
	createFolderStructure,
	createFilesForExt,
	createWhereToPrintFiles,
	updateLinksToImportrange,
	setTitle,
} from './prepareStructure';
import { startTimeTrigger, cancelTimeTriggers } from './triggers';

// Funkcja do trigerów co minutę
// @ts-ignore
global.randomExternal = () => {
	randomExternal();
};
// @ts-ignore
global.randomLocal = () => {
	randomLocal();
};
// @ts-ignore
global.randomHub = () => {
	randomHub();
};

// @ts-ignore
global.menu = {
	test: () => setTitle(),
	createFolderStructure,
	createFilesForExt,
	createWhereToPrintFiles,
	updateLinksToImportrange,

	triggers: {
		ext: () => startTimeTrigger('randomExternal'),
		loc: () => startTimeTrigger('randomLocal'),
		hub: () => startTimeTrigger('randomHub'),
		stop: cancelTimeTriggers,
	},
};

const menu = () => {
	const ui = SpreadsheetApp.getUi();
	ui.createMenu('ICON')
		.addItem('Test : randomLocal', 'randomLocal')
		.addItem('Test : randomExternal', 'randomExternal')
		.addItem('Test : randomHub', 'randomHub')
		.addSeparator()
		.addItem(
			'Uruchom Trigger dla Random External',
			'menu.triggers.ext'
		)
		.addItem('Uruchom Trigger dla Random Local', 'menu.triggers.loc')
		.addItem('Uruchom Trigger dla Random Hub', 'menu.triggers.hub')
		.addSeparator()
		.addItem('Zatrzymaj triggery', 'menu.triggers.stop')
		.addSeparator()
		.addItem('1. createFolderStructure', 'menu.createFolderStructure')
		.addItem('2. createFilesForExt', 'menu.createFilesForExt')
		.addItem(
			'3. createWhereToPrintFiles',
			'menu.createWhereToPrintFiles'
		)
		.addItem(
			'4. updateLinksToImportrange',
			'menu.updateLinksToImportrange'
		)
		.addSeparator()
		.addItem('Test', 'menu.test')
		.addSeparator()
		.addItem('Update menu', 'onOpen')
		.addToUi();
};

export { menu };
