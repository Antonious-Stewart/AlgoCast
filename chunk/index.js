// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// init empty arr to push chunk
	const chunked = [];

	for (let chunk in array) {
		if (!chunked[chunked.length - 1] && chunked[chunk.length] !== size) {
			console.log(chunk);
			chunked.push([array[chunk]]);
		} else {
			chunked.push([chunk[chunk]]);
		}
	}
	return chunked;
}
console.log(chunk([1, 2, 4, 6, 7, 8], 2));
module.exports = chunk;
