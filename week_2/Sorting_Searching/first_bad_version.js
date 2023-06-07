/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
const solution = (isBadVersion) => {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */

	// This is just a binary search, where the given function must be true
	return (n) => {
		let start = 1,
			end = n;

		while (end > start) {
			let mid = Math.floor(start + (end - start) / 2);
			// If mid is bad, look to the left
			if (isBadVersion(mid)) {
				end = mid;
				// If mid isn't yet bad, look to the right
			} else {
				start = mid + 1;
			}
		}
		return start;
	};
};
