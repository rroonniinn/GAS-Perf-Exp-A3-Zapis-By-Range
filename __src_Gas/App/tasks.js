/* eslint-disable max-params */
import { randomIntegersArray2d } from '../../../GAS | Library/v02/arr/randomIntegersArray2d';
import { getSheet } from '../../../GAS | Library/v02/gas/getSheet';
import { getIdFromUrl } from '../../../GAS | Library/v02/gas/getIdFromUrl';
import { randomInteger } from '../../../GAS | Library/v02/num/randomInteger';

import { EXT_SHEET_URL, EXT_SHEET_NAME, HUB_URL } from './config';
import { paste } from '../../../GAS | Library/v02/gas/paste';

/**
 * Obiekt z funkcjami generującymi losowe tablice z numerami od 0 do 1000
 * o różnej liczbie wierszy i 15 kolumnach
 * @type {Object<string, function>} generateRandomArrs
 */

const generateData = {
	l100: () => randomIntegersArray2d(100, 15),
	l200: () => randomIntegersArray2d(200, 15),
	l500: () => randomIntegersArray2d(500, 15),
	l1000: () => randomIntegersArray2d(1000, 15),
	l2000: () => randomIntegersArray2d(2000, 15),
	l4000: () => randomIntegersArray2d(4000, 15),
	l8000: () => randomIntegersArray2d(8000, 15),
	l16000: () => randomIntegersArray2d(16000, 15),
};

/**
 * Zwraca odpowieni arkusz do modyfikacji na podstawie parametru 'geo'
 * określającego czy ma być to external, local czy hub
 *
 * @param {string} geo Określenie 'ext', 'loc', 'hub'
 * @param {string} sheetCode Zdefiniowany kod zadania np. l100
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Obiket arkusza
 */

const getProperSheet = (geo, sheetCode) => {
	if (geo === 'ext') {
		return getSheet(
			EXT_SHEET_NAME,
			getIdFromUrl(EXT_SHEET_URL[sheetCode])
		);
	}
	if (geo === 'loc') {
		return getSheet(sheetCode);
	}
	if (geo === 'hub') {
		return getSheet(sheetCode, getIdFromUrl(HUB_URL));
	}
};

/**
 * Helper
 * Pobiera numer ze stringa
 * @param {string} str Zdefiniowany kod zadania np. l100
 */
const getNumbFromStr = str => Number(/[0-9]+/.exec(str)[0]);

/**
 * Pobiera losowy zakres zawierający wskazaną liczbę wpisów wierszy
 * ze wskazanego arkusza
 * @param {string} geo Skąd ma wziąć dane - 'ext', 'loc', 'hub'
 * @param {number} quant Liczba wierszy w zakesie
 * @return {(sheetCode: string) => function} sheetCode - Zdefiniowany kod zadania np. l100
 */
const pasteToRange = (geo, quant) => sheetCode => () => {
	const sheet = getProperSheet(geo, sheetCode);

	const maxEndRow = getNumbFromStr(sheetCode); // maksymalny zakres dostępny w arkuszu
	const maxStartRow = maxEndRow - quant + 1; // maksymalny start zakresu
	const rangeStart = randomInteger(1, maxStartRow);
	const randomData = randomIntegersArray2d(quant, 15);

	paste(sheet, `A${rangeStart}`, randomData, {
		notRemoveFilers: true,
		restrictCleanup: 'preserve',
		notRemoveEmptys: true,
	});

	console.log(
		`Geo: ${geo}. Quant: ${quant}. SheetCode: ${sheetCode}. Range Start: A${rangeStart} | First cell val: ${randomData[0][0]} `
	);
};

const tasks = {
	/* External */
	ext1: pasteToRange('ext', 1),
	ext5: pasteToRange('ext', 5),
	ext10: pasteToRange('ext', 10),
	ext25: pasteToRange('ext', 25),
	ext50: pasteToRange('ext', 50),
	ext100: pasteToRange('ext', 100),

	/* Local */
	loc1: pasteToRange('loc', 1),
	loc5: pasteToRange('loc', 5),
	loc10: pasteToRange('loc', 10),
	loc25: pasteToRange('loc', 25),
	loc50: pasteToRange('loc', 50),
	loc100: pasteToRange('loc', 100),

	/* Hub */
	hub1: pasteToRange('hub', 1),
	hub5: pasteToRange('hub', 5),
	hub10: pasteToRange('hub', 10),
	hub25: pasteToRange('hub', 25),
	hub50: pasteToRange('hub', 50),
	hub100: pasteToRange('hub', 100),
};

export { tasks };
