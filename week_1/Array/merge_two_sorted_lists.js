// Given two sorted arrays, merge them into a single sorted array.
const mergeSortedArrays = (arr1, arr2) => {
	let p1 = 0;
	let p2 = 0;
	let result = [];
	while (p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] > arr2[p2]) {
			result.push(arr2[p2]);
			p2++;
		} else {
			result.push(arr1[p1]);
			p1++;
		}
	}
	// If there are any elements remaining in either array, push them onto the results array
	while (p1 < arr1.length) {
		result.push(arr1[p1]);
		p1++;
	}
	while (p2 < arr2.length) {
		result.push(arr2[p2]);
		p2++;
	}

	return result;
};

module.exports = mergeSortedArrays;
