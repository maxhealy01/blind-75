const canConstruct = (ransomNote, magazine) => {
	if (magazine.length < ransomNote.length) return false;

	const map = {};

	// Map every letter in the magazine
	for (i = 0; i < magazine.length; i++) {
		map[magazine[i]] ? map[magazine[i]]++ : (map[magazine[i]] = 1);
	}
	// Subtract every letter from ransomNote -- if < 0, it'll become an error
	for (i = 0; i < ransomNote.length; i++) {
		if (map[ransomNote[i]] > 0) map[ransomNote[i]]--;
		else return false;
	}

	return true;
};

console.log(canConstruct("aa", "aab"));
module.exports = canConstruct;
