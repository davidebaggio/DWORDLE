/* const fs = module.constructor._load('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const dictionary = fs.readFileSync(wordListPath, 'utf8').split('\n');
 */
// generate a random grid of letters
export function generateGrid() {
	// generate a list of random letters
	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	return Array.from({ length: 16 }, () =>
		letters[Math.floor(Math.random() * letters.length)]
	);
}

// check if a sequence of letters forms a valid word
export function isWordValid(letters) {
	// check if the letters form a known word
	// (this would require a dictionary of known words)
	/* const word = letters.join('');
	if (dictionary.has(word)) {
		return true;
	} */

	return false;
}
