// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = {};
	let count = 0;
	let maxChar = '';
	for (let char of str.replace(/\s+/gm, '')) {
		// assign char to charMap
		// when iterating char for first time asign 1 to value
		// when iteration occurs again increment
		charMap[char] = charMap[char] + 1 || 1;
	}
	for (let char in charMap) {
		//if count is less than charMap[char] count will equal count
		//maxChar will equal char that occurs the most
		if (count < charMap[char]) {
			count = charMap[char];
			maxChar = char;
		}
	}
	//return most reoccurring char
	return maxChar;
}
maxChar('Hello There');
module.exports = maxChar;
