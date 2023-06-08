// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// // This function accepts a string and determines whether it's
// // a valid arrangement of parentheses, brackets and curly braces

// // This version of the algorithm functions irrespective of the distance
// // between opening and closing brackets.
// const isValidParentheses = (str) => {
// 	const stack = [];

// 	for (let i = 0; i < str.length; i++) {
// 		let char = str.charAt(i);
// 		// We're building a mirror structure, so '({[' will create a stack of ']})'
// 		// which will then be validated in the default case.
// 		switch (char) {
// 			case "(":
// 				stack.push(")");
// 				break;
// 			case "[":
// 				stack.push("]");
// 				break;
// 			case "{":
// 				stack.push("}");
// 				break;
// 			default:
// 				if (char !== stack.pop()) {
// 					return false;
// 				}
// 		}
// 	}

// 	return stack.length === 0;
// };

// module.exports = isValidParentheses;

// function countUniqueValues(arr) {
// 	let i = 0;
// 	let j = 1;

// 	if (arr.length === 0) return 0;
// 	for (let j = 1; j < arr.length; j++) {
// 		if (arr[i] !== arr[j]) {
// 			i++;
// 			arr[i] = arr[j];
// 		}
// 	}
// 	return i + 1;
// }

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// function maxSubarraySum(arr, num) {
// 	let count = 0,
// 		max = 0;

// 	if (arr.length < num) return null;
// 	for (let i = 0; i < num; i++) {
// 		max += arr[i];
// 	}
// 	count = max;
// 	for (let i = num; i < arr.length; i++) {
// 		count += arr[i];
// 		count -= arr[i - num];
// 		max = Math.max(count, max);
// 	}
// 	return max;
// }
// console.log(
// 	maxSubarraySum(
// 		[
// 			10, 5, 3, 7, 300, 2, 123, 10, 234, 8, 234, 7, 45, 87, 54, 78, 34, 23, 1,
// 			5, 4,
// 		],
// 		3
// 	)
// );

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(first, second) {
	// Create a pointer for the first string
	let p1 = 0;

	for (let p2 = 0; p2 < second.length; p2++) {
		if (first[p1] === second[p2]) {
			p1++;
		}
		if (p1 === first.length) {
			return true;
		}
	}

	return false;
}

const bubbleSort = (arr) => {
	let len = arr.length;
	let noSwaps;
	// Decrement i so that we don't re-compare the sorted final value.
	for (let i = len; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
};

const selectionSort = (arr) => {
	let count = 0;
	for (i = 0; i < arr.length - 1; i++) {
		let mIndex = i;
		let currentMin = arr[i];
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < currentMin) {
				mIndex = j;
				currentMin = arr[j];
			}
			count++;
			console.log(count);
		}
		[arr[mIndex], arr[i]] = [arr[i], arr[mIndex]];
	}
	return arr;
};

const insertionSort = (arr) => {
	for (i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
};

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

console.log(mergeSortedArrays([1, 2, 3, 4, 5, 8, 9], [0, 4, 6, 7, 8, 10]));
