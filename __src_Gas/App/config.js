/* *********************** PLIKI Z DANYMI ******************* */

/**
 * URLe z danymi dla Huba
 * @type {string} HUB_URL
 */

const HUB_URL =
	'https://docs.google.com/spreadsheets/d/1KuhfezHwXz42Nz0osng2qWmHuW4eWM4ItmmOpNWxTzw';

/**
 * URLe zewnętrznych arkuszy z których pobieramy dane
 * @type {Object<string, string>} EXT_SHEET_URL
 */
const EXT_SHEET_URL = {
	l16000:
		'https://docs.google.com/spreadsheets/d/1svyJNkTRX-suX7UODtzFMPEt1q5nlDY3svv8rlTnvR0',
	l8000:
		'https://docs.google.com/spreadsheets/d/1dUjmLKOYc_9R3zWHJ16bued_DtoiOyF5jK7JF-Ma7ck',
	l4000:
		'https://docs.google.com/spreadsheets/d/1V7wsvsl8YVerIbLjqS9o2zW5yvSlEvvISX4-__tg_iw',
	l2000:
		'https://docs.google.com/spreadsheets/d/1Vnw8O_OX_EMB7UntXyrZQWc1yWP0bD7jDgBtbKA4oQs',
	l1000:
		'https://docs.google.com/spreadsheets/d/1frRBzggDhfhr_mVue4sIdBtwtCwo0FBuNZaj8IaTC0s',
	l500:
		'https://docs.google.com/spreadsheets/d/1mDCFCGFdH_eR7HM7Jc2nJ8_E0CTheHSNJ8VaIKQHspo',
	l200:
		'https://docs.google.com/spreadsheets/d/1wj08EmKxZp3tGE9u7vjlEg69NWxpejjp_z7mn5AoCw8',
	l100:
		'https://docs.google.com/spreadsheets/d/1nZUVf-4Kud6ShlZrU4XnmI-tn9vXPuZkouAeQLYTycU',
};

/**
 * Nazwa arkusza w zewnętrznym pliku, w którym znajdują się losowe dane
 * @type {string} EXT_SHEET_NAME
 */
const EXT_SHEET_NAME = 'res';

/**
 * Opis zadania wykorzysytwany w singlu
 * @type {Object<string, string>}
 */

const SHORT_DSC = {
	l100: 'Arr 1: 100',
	l200: 'Arr 2: 200',
	l500: 'Arr 3: 500',
	l1000: 'Arr 4: 1000',
	l2000: 'Arr 5: 2000',
	l4000: 'Arr 6: 4000',
	l8000: 'Arr 7: 8000',
	l16000: 'Arr 8: 16000',
};

/**
 * Dłuższy opis wykorzystywany w singlu
 * @type {Object<string, string>}
 */

const LONG_DESC = {
	ext1: 'EbE 1: 1 row - Ext',
	ext5: 'EbE 2: 5 rows - Ext',
	ext10: 'EbE 3: 10 rows - Ext',
	ext25: 'EbE 4: 25 rows - Ext',
	ext50: 'EbE 5: 50 rows - Ext',
	ext100: 'EbE 6: 100 rows - Ext',

	loc1: 'EbE 1: 1 row - Loc',
	loc5: 'EbE 2: 5 rows - Loc',
	loc10: 'EbE 3: 10 rows - Loc',
	loc25: 'EbE 4: 25 rows - Loc',
	loc50: 'EbE 5: 50 rows - Loc',
	loc100: 'EbE 6: 100 rows - Loc',

	hub1: 'EbE 1: 1 row - Hub',
	hub5: 'EbE 2: 5 rows - Hub',
	hub10: 'EbE 3: 10 rows - Hub',
	hub25: 'EbE 4: 25 rows - Hub',
	hub50: 'EbE 5: 50 rows - Hub',
	hub100: 'EbE 6: 100 rows - Hub',
};

/**
 * Gdzie wkleić wyniki ekspetymentów
 * @type {Object}
 */

/**
 * @typedef {Object} PRINT_DEST
 * @property {Object<string, string>} geo URLe plików do których wkleić dane z czasami egzekucji
 * @property {Object<string, string>} entries Kody arkuszy do których wkleić dane z czasami
 */
/**
 * @type {PRINT_DEST} obj
 */

const WHERE_TO_PRINT = {
	geo: {
		hub:
			'https://docs.google.com/a/iconaris.com/spreadsheets/d/1RGJnjQ86VKcf0kx1F4aUjunosaZ_Y0-e9pSTBU7AeTk/edit',
		loc:
			'https://docs.google.com/a/iconaris.com/spreadsheets/d/1v88rH8-Z0rmly2FBE26eOEfngPW8hnUGQ6wsjehcirI/edit',
		ext:
			'https://docs.google.com/a/iconaris.com/spreadsheets/d/1KzxmZnfJZcDkWCvtyUkR_Gn2QudR1SKttI1Zwfg8v9A/edit',
	},
	entries: {
		e1: 'T: 1',
		e5: 'T: 5',
		e10: 'T: 10',
		e25: 'T: 25',
		e50: 'T: 50',
		e100: 'T: 100',
	},
};

export {
	EXT_SHEET_URL,
	EXT_SHEET_NAME,
	SHORT_DSC,
	LONG_DESC,
	WHERE_TO_PRINT,
	HUB_URL,
};
