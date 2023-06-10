const isPalindrome = (str) => {
	// Eliminate non-alphanumeric chars and make it lowercase
	str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

	for (i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}

	return true;
};

module.exports = isPalindrome;
