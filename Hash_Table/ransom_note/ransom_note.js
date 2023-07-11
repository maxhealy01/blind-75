const canConstruct = (ransomNote, magazine) => {
	if (magazine.length < ransomNote.length) return false;

	const map = {};

	for (char of magazine) {
		map[char] ? map[char]++ : (map[char] = 1);
	}

	for (char of ransomNote) {
		if (map[char] > 0) map[char]--;
		else return false;
	}

	return true;
};

module.exports = canConstruct;
