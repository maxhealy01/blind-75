var isPalindrome = function (s) {
	// Eliminate non-alphanumeric chars and make it lowercase
	s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

	for (i = 0; i < Math.floor(s.length / 2); i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false;
		}
	}

	return true;
};
