/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
/* eslint-disable max-params */

/**
 * @typedef {import('./../../../../00. My Library/v02/experiments/types').ExpSheet} ExpSheet
 * @typedef {import('./../../../../00. My Library/v02/experiments/types').ExpTasks} ExpTasks
 * @typedef {import('./../../../../00. My Library/v02/gas/styleSheet').RangeOptions} RangeOptions
 */

import { setMenu } from '../../../../00. My Library/v02/gas/setMenu';
import { paste } from '../../../../00. My Library/v02/gas/paste';
import { getProperSheet } from '../../../../00. My Library/v02/experiments/getProperSheet';
import { runRandom } from '../../../../00. My Library/v02/experiments/runRandom';
import { buildStructure } from '../../../../00. My Library/v02/experiments/buildStructure';
import { randomIntegersArray2d } from '../../../../00. My Library/v02/arr/randomIntegersArray2d';
import { randomInteger } from '../../../../00. My Library/v02/num/randomInteger';
import {
	setEveryMin,
	stopTimeTriggers,
} from '../../../../00. My Library/v01/gas/timeTriggers';

import { EXP_SETUP } from './config';

/**
 * * Helper
 * Funkcja oczekująca tablicy funkcji z których będzie losowała te, które
 * mają właśnie się odpalić. Załadowany jest już do niej plik configu
 * @type {(arr: [string, function, string][]) => void}
 */

const go = runRandom(EXP_SETUP);

/* ******************************* ZADANIA ******************************** */

/**
 * Pobiera losowy zakres zawierający wskazaną liczbę wpisów wierszy
 * ze wskazanego arkusza
 * @param {'ext'|'loc'|'hub'} geo Strukura danych do pobrania
 * @param {number} quant Liczba modyfikacji
 * @return {(target: ExpSheet) => any} target Np. target1 czy target2
 */
const pasteToRange = (geo, quant) => target => {
	const sheet = getProperSheet(geo, target, EXP_SETUP);

	const maxEndRow = target.size; // maksymalny zakres dostępny w arkuszu
	const maxStartRow = maxEndRow - quant + 1; // maksymalny start zakresu
	const rangeStart = randomInteger(1, maxStartRow);
	const randomData = randomIntegersArray2d(quant, 15);

	paste(sheet, `A${rangeStart}`, randomData, {
		notRemoveFilers: true,
		restrictCleanup: 'preserve',
		notRemoveEmptys: true,
	});

	console.log(
		`Type: ${geo.toUpperCase()}. Target: ${
			target.printName
		}. Paste into range starts at: ${rangeStart} '${
			target.printName
		}'. Total rows: '${quant}'.`
	);
};

/* **************************** SETUP EXPERYMENTU ************************ */

// @ts-ignore
global.exp = {
	// Sety funkcji do losowania
	loc: go([
		['loc', pasteToRange('loc', 1), 'a'],
		['loc', pasteToRange('loc', 5), 'b'],
		['loc', pasteToRange('loc', 10), 'c'],
		['loc', pasteToRange('loc', 25), 'd'],
		['loc', pasteToRange('loc', 50), 'e'],
		['loc', pasteToRange('loc', 100), 'f'],
	]),
	hub: go([
		['hub', pasteToRange('hub', 1), 'a'],
		['hub', pasteToRange('hub', 5), 'b'],
		['hub', pasteToRange('hub', 10), 'c'],
		['hub', pasteToRange('hub', 25), 'd'],
		['hub', pasteToRange('hub', 50), 'e'],
		['hub', pasteToRange('hub', 100), 'f'],
	]),
	ext: go([
		['ext', pasteToRange('ext', 1), 'a'],
		['ext', pasteToRange('ext', 5), 'b'],
		['ext', pasteToRange('ext', 10), 'c'],
		['ext', pasteToRange('ext', 25), 'd'],
		['ext', pasteToRange('ext', 50), 'e'],
		['ext', pasteToRange('ext', 100), 'f'],
	]),
};

// @ts-ignore
global.utils = {
	buildStructure: () => buildStructure(EXP_SETUP),
	triggersFire: () => {
		setEveryMin('exp.loc', 1);
		setEveryMin('exp.hub', 1);
		setEveryMin('exp.ext', 1);
	},
	triggersStop: stopTimeTriggers,
};

const menuElements = [
	['Zbuduj / zresetuj strukturę plików', 'utils.buildStructure'],
	[
		'Przetestuj funkcje',
		['Local', 'exp.loc'],
		['Hub', 'exp.hub'],
		['External', 'exp.ext'],
	],
	'-------------------',
	['Uruchom eksperyment', 'utils.triggersFire'],
	['Zatrzymaj eksperyment', 'utils.triggersStop'],
	'-------------------',
	['Update menu', 'onOpen'],
];

// @ts-ignore
global.onOpen = () => {
	setMenu(menuElements, 'ICON', true);
};

export { pasteToRange };
